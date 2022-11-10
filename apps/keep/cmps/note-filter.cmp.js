export default {
    template:`
    <form  @submit.prevent>
                <input class="note-search-bar" v-model="search" v-on:input="getText" ref="full" type="text" placeholder="Search Note">
                <section class="search-bar-btns">
                <button class="sb-btn txt"></button>
                <button class="sb-btn pic"></button>
                <button class="sb-btn video"></button>
                <button class="sb-btn audio"></button>
                <button class="sb-btn todos"></button>
                </section>

            </form>
    `,
    data() {
        return {
            filterBy: {
                txt: '',

            }
        }
    },
    methods: {
        filter() {
            this.$emit('filter', { ...this.filterBy })
        }
    }
}