import noteFooter from "./note-footer.cmp.js"
export default {
    props: ['note'],
    emits:['remove','pinChange','backgroundChange',"duplicate",'editNote'],
    template: `
    <section class="note-txt">
        <section class="note-header"></section>
        <i class="note-txt">{{note.info.txt}}</i>
        <noteFooter @remove="removeNote($event)" @pinChange="pinChange($event)" @backgroundChange="backgroundChange($event)" @duplicate="duplicate($event)" @editNote="editNote($event)" :note="note"/>
        </section>
    `,
    methods: {
        what(note) {
        //    console.log(note) 
        },
        removeNote(noteId) {
            this.$emit('remove', noteId)
        },
        pinChange(noteId) {
            console.log(noteId) 
            
            this.$emit('pinChange', noteId)
        },
        backgroundChange(style) {
            console.log(style)
        this.$emit('backgroundChange', style)
    },
       duplicate(noteId) {
        this.$emit('duplicate',noteId)
        },
         editNote(noteId) {
        this.$emit('editNote',noteId)
        },
    }, 
    
    components: {
      noteFooter
    }
}
