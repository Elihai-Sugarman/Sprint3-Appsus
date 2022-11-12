import noteFooter from "./note-footer.cmp.js"
export default {
  props: ['note'],
  emits:['remove','pinChange','backgroundChange',"duplicate"],
  template: `
    <section class="note-video">
       <section class="note-header"></section>
       <h1 class="note-title">{{this.note.info.title}}</h1>
       <iframe width="100%" height="200"
         :src=vidUrl()></iframe>
       <noteFooter @remove="removeNote($event)" @pinChange="pinChange($event)" @backgroundChange="backgroundChange($event)" @duplicate="duplicate($event)" :note="note"/>
    </section>
    `,
  methods: {
    vidUrl() {
      return `${this.note.info.url}`
    },
    removeNote(noteId) {
      console.log(noteId)
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

