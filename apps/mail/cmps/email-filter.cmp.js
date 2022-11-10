export default {
    template: `
    <section class="filter">
        <input type="text" @input="filter" v-model="input">
        <hr/>
    </section>
    `,
    data() {
        return {
            input: null,
        }
    },
    methods: {
        filter() {
            this.$emit('filter', this.input)
        },
    },
}
