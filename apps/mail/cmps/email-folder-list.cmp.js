import { emailService } from '../services/email-service.js'

export default {
    props: ['emails'],
    template: `
    <section class="email-folder-list flex flex-column">
        <button @click="changeFolder('inbox')">Inbox {{ unReadCount }}</button>
        <button @click="changeFolder('sent')">Sent</button>
        <button @click="changeFolder('starred')">Starred</button>
    </section>
    `,
    methods: {
        changeFolder(status) {
            emailService.setStatus(status)
            const checkedEmails = emailService.getCheckedEmails()
            checkedEmails.splice(0)
        },
    },
    computed: {
        unReadCount() {
            let count = 0
            this.emails.forEach((email) => {
                if (!email.isRead) count++
            })
            if (count > 0) count = '(' + count + ')'
            else count = ''
            return count
        },
    },
}
