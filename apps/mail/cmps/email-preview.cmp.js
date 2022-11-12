import { storageService } from '../../../services/async-storage.service.js'
import { emailService } from '../services/email-service.js'

export default {
    name: 'email-preview',
    props: ['email'],
    template: `
    <tr class="table-raw" v-if="email">
        <td class="check-box-table"><input class="check-box" type="checkbox" @input="checkEmail"></td>
        <td class="star-table" v-if="email.isStar" class="email-star star" @click="changeStar">&#9733;</td>
        <td v-else class="email-star" @click="changeStar">&#9734;</td>
        <td class="adress table" :class="readOrNot" @click="readEmail"><router-link :to="'/mail/' + email.id">{{ getAdress }}</router-link></td>
        <td class="subject table" :class="readOrNot" @click="readEmail"><router-link :to="'/mail/' + email.id">{{ email.subject }}</router-link></td>
        <td class="date table" :class="readOrNot" @click="readEmail"><router-link :to="'/mail/' + email.id">{{ email.sentAt }}</router-link></td>
    </tr>
    `,
    data() {
        return {
            star: false,
        }
    },
    methods: {
        readEmail() {
            this.email.isRead = true
            storageService.put(emailService.EMAILS_KEY, this.email)
        },
        checkEmail() {
            this.$emit('checked', this.email.id)
        },
        changeStar() {
            this.star = !this.star
            this.email.isStar = !this.email.isStar
            storageService.put(emailService.EMAILS_KEY, this.email)
        },
    },
    computed: {
        readOrNot() {
            return { 'bold-text': !this.email.isRead }
        },
        getAdress() {
            const status = emailService.getStatus()
            if (status === 'inbox') return this.email.from
            else if (status === 'sent' || this.email.from === 'user@appsus.com')
                return 'to: ' + this.email.to
            return this.email.from
        },
    },
}
