import { emailService } from '../services/email-service.js'

export default {
    template: `
    <section v-if="email" class="email-details">
        <router-link class=".button" to="/mail">Back</router-link>
        <section class="email-details-headline flex flex-row">
            <h2>{{ email.subject }}</h2>
            <h3>{{ email.from }}</h3>
            <h3>{{ email.sentAt }}</h3>
        </section>
        <pre>{{ email.body }}</pre>
    </section>
    `,
    data() {
        return {
            email: null,
        }
    },
    created() {
        const id = this.$route.params.id
        emailService.get(id).then((email) => (this.email = email))
    },
}
