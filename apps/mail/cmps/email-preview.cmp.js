import { storageService } from '../../../services/async-storage.service.js'
import { emailService } from '../services/email-service.js'

export default {
    name: 'email-preview',
    props: ['email'],
    template: `
    <td :class="readOrNot"><input type="checkbox" @input="checkEmail"></td>
    <!-- <td :class="readOrNot" @click="readEmail">{{ email.from }}</td>
    <td :class="readOrNot" @click="readEmail">{{ email.subject }}</td>
    <td :class="readOrNot" @click="readEmail">{{ email.sentAt }}</td> -->
    <td :class="readOrNot" @click="readEmail"><router-link :to="'/mail/' + email.id">{{ email.from }}</router-link></td>
    <td :class="readOrNot" @click="readEmail"><router-link :to="'/mail/' + email.id">{{ email.subject }}</router-link></td>
    <td :class="readOrNot" @click="readEmail"><router-link :to="'/mail/' + email.id">{{ email.sentAt }}</router-link></td>
    `,
    methods: {
        readEmail() {
            this.email.isRead = true
            storageService.put(emailService.EMAILS_KEY, this.email)
        },
        checkEmail() {
            this.email.isChecked = !this.email.isChecked
            storageService.put(emailService.EMAILS_KEY, this.email)
        },
    },
    computed: {
        readOrNot() {
            return { 'bold-text': !this.email.isRead }
        },
    },
}
