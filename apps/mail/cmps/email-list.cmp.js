import emailPreview from './email-preview.cmp.js'
import { emailService } from '../services/email-service.js'

export default {
    template: `
    <button @click="deleteEmails">Delete</button>
    <table>
        <tr v-for="email in currEmails" :key="email.id">
                <email-preview :email="email"/>
        </tr>
    </table>
    `,
    data() {
        return {
            emails: null,
        }
    },
    computed: {
        currEmails() {
            emailService.query().then((emails) => (this.emails = emails))
            return this.emails
        },
    },
    methods: {
        readEmail(emailId) {
            console.log(emailId)
        },
        deleteEmails() {
            this.emails.forEach((email) => {
                if (email.isChecked) emailService.remove(email.id)
            })
            // emailService.query().then((emails) => {
            //     emails.forEach((email) => {
            //         if (email.isChecked) emailService.remove(email.id)
            //         console.log(email)
            //     })
            //     console.log(emails)
            // })
        },
    },
    components: {
        emailPreview,
    },
}
