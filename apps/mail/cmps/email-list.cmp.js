import emailPreview from './email-preview.cmp.js'
import { emailService } from '../services/email-service.js'

export default {
    template: `
    <section class="email-list-cmp">
    <section class="mail-list-header">
        <img class="delete-email-icon" @click="deleteEmails" title="Delete" src="assets/img/trash-icon.png">
        <!-- <router-link  to="/mail/compose"><button class="compose-btn">compose</button></router-link> -->
        <router-link  to="/mail/compose"><img class="compose-icon" title="New Email" src="assets/img/compose.png"></router-link>
        </section>
        <table>
            <email-preview v-for="email in currEmails" :key="email.id" :email="email" @checked="checkEmail"></email-preview>
        </table>
    </section>
    `,
    data() {
        return {
            emails: null,
        }
    },
    computed: {
        currEmails() {
            emailService.query().then((emails) => {
                this.emails = emails.filter((email) => {
                    const status = emailService.getStatus()
                    let address = null
                    if (status === 'inbox' || email.from !== 'user@appsus.com')
                        address = email.from
                    else if (
                        status === 'sent' ||
                        email.from === 'user@appsus.com'
                    )
                        address = email.to
                    return (
                        ((emailService.getStatus() === 'inbox' &&
                            email.from !== 'user@appsus.com') ||
                            (emailService.getStatus() === 'sent' &&
                                email.from === 'user@appsus.com') ||
                            (emailService.getStatus() === 'starred' &&
                                email.isStar)) &&
                        (address
                            .toUpperCase()
                            .includes(emailService.getText().toUpperCase()) ||
                            email.subject
                                .toUpperCase()
                                .includes(emailService.getText().toUpperCase()))
                    )
                })
            })
            return this.emails
        },
    },
    methods: {
        checkEmail(emailId) {
            const checkedEmails = emailService.getCheckedEmails()
            const idx = checkedEmails.findIndex(
                (checkedId) => checkedId === emailId
            )
            if (idx === -1) checkedEmails.push(emailId)
            else checkedEmails.splice(idx, 1)
        },
        deleteEmails() {
            const checkedEmails = emailService.getCheckedEmails()
            if (checkedEmails.length > 0) this.deleteEmail(checkedEmails)
        },
        deleteEmail(checkedEmails) {
            const emailId = checkedEmails[0]
            emailService.remove(emailId).then(() => {
                checkedEmails.splice(0, 1)
                if (checkedEmails.length > 0) this.deleteEmail(checkedEmails)
            })
        },
    },
    components: {
        emailPreview,
    },
}
