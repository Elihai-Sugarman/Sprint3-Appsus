import { emailService } from '../services/email-service.js'

import emailFolderList from '../cmps/email-folder-list.cmp.js'
import emailFilter from '../cmps/email-filter.cmp.js'
import emailList from '../cmps/email-list.cmp.js'
import emailDetails from './email-details.cmp.js'

export default {
    template: `
        <section class="email-app flex flex-row">
            <section class="email-nav">
                <email-folder-list :emails="emailsToShow"/>
            </section>
            <section class="email-content">
                <email-filter @filter="filter"/>
                <router-view></router-view>
            </section>
            
        </section>
    `,
    data() {
        return {
            emails: [],
        }
    },
    created() {
        emailService.query().then((emails) => {
            this.emails = emails
        })
    },
    methods: {
        filter(input) {
            emailService.setText(input)
        },
    },
    computed: {
        emailsToShow() {
            emailService.query().then((emails) => (this.emails = emails))
            return this.emails
        },
    },
    components: {
        emailFolderList,
        emailFilter,
        emailList,
        emailDetails,
    },
}
