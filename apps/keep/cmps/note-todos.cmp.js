import noteFooter from "./note-footer.cmp.js"
export default {
  props: ['note'],
  emits:['remove','pinChange','backgroundChange','todoAddDate',"duplicate"],
    template: `
    <section v-on:click="what(note)" class="note-todos">
       <section class="note-header"></section>
       <ul id="vue">
           <li v-for="(text,index) in note.info.todos" @click="selected(index)" :class="[this.note.info.todos[index].doneAt ? done : unDone]" :change="dateReturn(index)" :key="note.id">{{note.info.todos[index].txt}} {{date}} 
           </li>
       </ul>
       <noteFooter @remove="removeNote($event)" @pinChange="pinChange($event)" @backgroundChange="backgroundChange($event)" @duplicate="duplicate($event)" :note="note"/>
       </section>
       `,
    data() {
      return {
        date: '',
        // selected: undefined,
        done: "done",
        unDone:"unDone",
  
      }
    },
    methods: {
      selected(index) {
        let todoChange = [this.note.id, index]
        this.$emit('todoAddDate', todoChange)
      },
        getDate() {
          this.note.info.toISOString().slice(0,10)  
      },
      dateReturn(index) {
          if (!this.note.info.todos[index].doneAt) {return this.date=""}
          return this.date=new Date(this.note.info.todos[index].doneAt).toDateString().slice(0,17)
      },
      removeNote(noteId) {
      console.log("video",noteId)
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
