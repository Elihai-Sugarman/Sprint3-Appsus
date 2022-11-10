import { storageService } from '../../../services/async-storage.service.js'
import { emailService } from '../services/email-service.js'
import { utilService } from '../../../services/util.service.js'

export default {
    template: `
    <section class="email-compose">
        <router-link class=".button" to="/mail">Back</router-link>
        <h1>New Message</h1>
        <form class="flex flex-column" @submit="onSubmit">
            <label>
                To:
                <input type="text" v-model="to">
            </label>
            <label>
                Subject:
                <input type="text" v-model="subject">
            </label>
            <label>
                <textarea type="text" v-model="body"/>
            </label>
            <button><router-link class=".button" to="/mail">Send</router-link></button>
        </form>
    </section>
        `,
    data() {
        return {
            to: null,
            subject: null,
            body: null,
        }
    },
    methods: {
        onSubmit(ev) {
            ev.preventDefault()
            storageService.post(emailService.EMAILS_KEY, {
                id: utilService.makeId(),
                subject: this.subject,
                body: this.body,
                isRead: true,
                sentAt: new Date().toDateString(),
                from: 'user@appsus.com',
                to: this.to,
                isStar: false,
            })
            this.to = ''
            this.subject = ''
            this.body = ''
        },
    },
}
