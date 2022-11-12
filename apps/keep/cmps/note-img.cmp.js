import noteFooter from "./note-footer.cmp.js"

export default {
  props: ['note'],
  emits:['remove','pinChange','backgroundChange',"duplicate"],
    template: `
    <section v-on:click="what(note)" class="note-img">
       <section class="note-header"></section>
       <h1 class="note-title">{{this.note.info.title}}</h1>
       <img :src=imgUrl() alt="Girl in a jacket" width="410"/>
       <noteFooter @remove="removeNote($event)" @pinChange="pinChange($event)" @backgroundChange="backgroundChange($event)" @duplicate="duplicate($event)" :note="note"/>
       </section>
    `,
    methods: {
        what(note) {
           console.log(note) 
        },
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
    },
    components: {
      noteFooter
    }
}
