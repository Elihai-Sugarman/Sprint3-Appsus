import noteFooter from "./note-footer.cmp.js"

export default {
  props: ['note'],
  emits:['remove','pinChange','backgroundChange',"duplicate",'editNote'],
    template: `
    <section class="note-img">
       <section class="note-header"></section>
       <h1 class="note-title">{{this.note.info.title}}</h1>
       <img :src=imgUrl() alt="Girl in a jacket" width="410"/>
       <noteFooter @remove="removeNote($event)" @pinChange="pinChange($event)" @backgroundChange="backgroundChange($event)" @duplicate="duplicate($event)" @editNote="editNote($event)" :note="note"/>
       </section>
    `,
    methods: {
        imgUrl() {
         return this.note.info.url
      },
        removeNote(noteId) {
      console.log("img",noteId)
      this.$emit('remove', noteId)
      },
      pinChange(noteId) {
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
