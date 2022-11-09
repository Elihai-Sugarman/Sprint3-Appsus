export default {
    template: `
    <section class="email-folder-list flex flex-column">
        <button>Inbox</button>
        <button>Sent</button>
        <button>Trash</button>
        <button>Draft</button>
    </section>
    `,
    data() {
        return {
            filterBy: {},
        }
    },
    methods: {
        filter() {
            this.$emit('filter', 'check')
        },
    },
}
