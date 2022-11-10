import { emailService } from '../services/email-service.js'

export default {
    props: ['emails'],
    template: `
    <section class="email-folder-list flex flex-column">
        <button @click="changeFolder('inbox')">Inbox ({{ unReadCount }})</button>
        <button @click="changeFolder('sent')">Sent</button>
        <button>Trash</button>
        <button>Draft</button>
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
            this.$emit('change', status)
        },
    },
    computed: {
        // unReadCount() {
        //     this.count = 0
        //     emailService.query().then((emails) => {
        //         emails.map((email) => {
        //             if (!email.isRead) this.count++
        //             console.log(this.count)
        //         })
        //     })
        //     // return count
        //     console.log(this.count)
        //     return this.count
        //     // if (count === 0) return ''
        //     // return '(' + count + ')'
        // },
    },
}
