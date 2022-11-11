import noteFooter from "./note-footer.cmp.js"
export default {
    props: ['note'],
    template: `
    <section class="note-txt">
        <section class="note-header"></section>
        <i class="note-txt">{{note.info.txt}}</i>
        <noteFooter @remove="removeNote($event)" :note="note"/>
        </section>
    `,
    methods: {
        what(note) {
        //    console.log(note) 
        },
        removeNote(noteId) {
            console.log(arguments,noteId)
            this.$emit('remove', this.note.id)
        },
    }, 
    
    components: {
      noteFooter
    }
}
