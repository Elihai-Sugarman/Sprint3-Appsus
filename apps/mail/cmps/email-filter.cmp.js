export default {
    template: `
    <section class="filter">
        <input class="search-input" type="text" @input="filter" placeholder="&#128269; Search mail" v-model="input">
        
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
