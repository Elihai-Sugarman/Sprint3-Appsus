import emailPreview from './email-preview.cmp.js'
import { emailService } from '../services/email-service.js'

export default {
    props: ['emails'],
    template: `
    <table>
        <tr v-for="email in emails" :key="email.id">
                <email-preview :email="email" @check="checkEmail"/>
        </tr>
    </table>
    `,
    data() {
        return {
            checkedEmails: [],
        }
    },
    methods: {
        checkEmail(emailId) {
            emailService
                .get(emailId)
                .then((email) => this.checkedEmails.push(email))
            console.log(this.checkedEmails)
        },
    },
    components: {
        emailPreview,
    },
}
