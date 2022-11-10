import noteFooter from "./note-footer.cmp.js"
export default {
    props: ['note'],
    template: `
    <section v-on:click="what(note)" class="note-txt">
        <section class="note-header"></section>
        <i class="note-txt">{{note.info.txt}}</i>
        <noteFooter :note="note"/>
        </section>
    `,
    methods: {
        what(note) {
           console.log(note) 
        },
    }, 
    components: {
      noteFooter
    }
}
