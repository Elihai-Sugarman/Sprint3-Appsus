import { emailService } from '../services/email-service.js'

import emailFolderList from '../cmps/email-folder-list.cmp.js'
import emailFilter from '../cmps/email-filter.cmp.js'
import emailList from '../cmps/email-list.cmp.js'

export default {
    template: `
        <section class="email-app flex flex-row">
            <section class="email-nav">
                <email-folder-list />
            </section>
            <section class="email-content">
                <email-filter @filter="filter"/>
                <email-list :emails="emailsToShow"/>
            </section>
            
        </section>
    `,
    data() {
        return {
            emails: [],
            filterBy: null,
        }
    },
    created() {
        emailService.query().then((emails) => {
            this.emails = emails
        })
    },
    methods: {
        filter(filterBy) {
            console.log(filterBy)
        },
    },
    computed: {
        emailsToShow() {
            if (!this.filterBy) return this.emails
        },
    },
    components: {
        emailFolderList,
        emailFilter,
        emailList,
    },
}
