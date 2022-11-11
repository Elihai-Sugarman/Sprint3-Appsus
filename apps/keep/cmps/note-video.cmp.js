import noteFooter from "./note-footer.cmp.js"
export default {
  props: ['note'],
  template: `
    <section class="note-video">
       <section class="note-header"></section>
       <h1 class="note-title">{{this.note.info.title}}</h1>
       <iframe width="100%" height="70%"
         :src=vidUrl()></iframe>
       <noteFooter @remove="removeNote($event)" :note="note"/>
    </section>
    `,
  methods: {
    // getDate() {
    //   this.note.toISOString().slice(0, 10)
    // },
    vidUrl() {
      console.log("triggerd url")
      return `${this.note.info.url}`
    },
    removeNote(noteId) {
      console.log("video",noteId)
      this.$emit('remove', noteId)
    }
  },
    components: {
      noteFooter
    }
  }
