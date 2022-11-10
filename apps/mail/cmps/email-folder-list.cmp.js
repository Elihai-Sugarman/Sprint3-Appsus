import { emailService } from '../services/email-service.js'

export default {
    props: ['emails'],
    template: `
    <section class="email-folder-list flex flex-column">
        <button @click="changeFolder('inbox')">Inbox ({{ unReadCount }})</button>
        <button @click="changeFolder('sent')">Sent</button>
        <button @click="changeFolder('starred')">Starred</button>
    </section>
    `,
    data() {
        return {
            unReadCount: 0,
            filterBy: {},
        }
    },
    created() {
        emailService.query().then((emails) => {
            emails.map((email) => {
                if (!email.isRead) this.unReadCount++
            })
        })
        if (!this.unReadCount) this.unReadCount = ''
    },
    methods: {
        changeFolder(status) {
            emailService.setStatus(status)
            const checkedEmails = emailService.getCheckedEmails()
            checkedEmails.splice(0)
        },
    },
    computed: {},
}
