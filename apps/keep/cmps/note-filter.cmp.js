export default {
    template:`
    <form class="book-add-form" @submit.prevent>
                <input v-model="search" v-on:input="getText" ref="full" type="text" placeholder="Search Note">
                
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