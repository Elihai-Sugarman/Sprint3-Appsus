export default {
    template: `
    <h1 @click="filter">email filter</h1>
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
