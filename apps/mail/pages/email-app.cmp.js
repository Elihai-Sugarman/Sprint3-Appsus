import { emailService } from '../services/email-service.js'

import emailFolderList from '../cmps/email-folder-list.cmp.js'
import emailFilter from '../cmps/email-filter.cmp.js'
import emailList from '../cmps/email-list.cmp.js'
import emailDetails from './email-details.cmp.js'

export default {
    template: `
        <section class="email-app flex flex-row">
            <section class="email-nav">
                <email-folder-list :emails="emailsToShow" @change="changeStatus"/>
            </section>
            <section class="email-content">
                <email-filter @filter="filter"/>
                <router-view></router-view>
            </section>
            
        </section>
    `,
    data() {
        return {
            cmpType: 'emailList',
            emails: [],
            filterBy: null,
            status: 'inbox',
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
        changeStatus(status) {
            this.status = status
        },
    },
    computed: {
        emailsToShow() {
            emailService.query().then((emails) => (this.emails = emails))
            this.emails.filter((email) => {
                // console.log(this.status, email.from)
                return (
                    (this.status === 'inbox' &&
                        email.from !== 'user@appsus.com') ||
                    (this.status === 'sent' && email.from === 'user@appsus.com')
                )
            })
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
