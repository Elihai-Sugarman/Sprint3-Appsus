import emailPreview from './email-preview.cmp.js'
import { emailService } from '../services/email-service.js'

export default {
    props: ['emails'],
    template: `
    <button @click="deleteEmails">Delete</button>
    <table>
        <tr v-for="email in emails" :key="email.id">
                <email-preview :email="email"/>
        </tr>
    </table>
    `,
    methods: {
        deleteEmails() {
            emailService.query().then((emails) => {
                emails.map((email) => {
                    if (email.isChecked) emailService.remove(email.id)
                    console.log(email)
                })
                console.log(emails)
            })
        },
    },
    components: {
        emailPreview,
    },
}
