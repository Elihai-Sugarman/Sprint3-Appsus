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
                <email-list :emails="emailsToShow"/>
                <!-- <component :is="cmpType" :emails="emailsToShow" @click="changeCmp"></component> -->
            </section>
            
        </section>
    `,
    data() {
        return {
            cmpType: 'emailList',
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
        changeCmp() {
            if (this.cmpType === 'emailList') this.cmpType = 'emailDetails'
            else this.cmpType = 'emailList'
        },
    },
    computed: {
        emailsToShow() {
            emailService.query().then((emails) => (this.emails = emails))
            if (!this.filterBy) return this.emails
        },
    },
    components: {
        emailFolderList,
        emailFilter,
        emailList,
        emailDetails,
    },
}
