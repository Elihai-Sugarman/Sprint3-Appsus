import noteFooter from "./note-footer.cmp.js"
export default {
    props: ['note'],
    template: `
    <section v-on:click="what(note)" class="note-todos">
       <section class="note-header"></section>
       <ul id="vue">
           <li v-for="(text,index) in note.info.todos" @click="selected(index)" :class="[this.note.info.todos[index].doneAt ? done : unDone]" :change="dateReturn(index)" :key="note.id">{{note.info.todos[index].txt}} {{date}} 
           </li>
       </ul>
       <noteFooter @remove="removeNote($event)" :note="note"/>
       </section>
       `,
    data() {
      return {
        date: '',
        // selected: undefined,
        done: "done",
        unDone:"unDone",
       
      };
    },
    methods: {
        what(note) {
          //  console.log(note) 
      },
      selected(index) {
        if (!this.note.info.todos[index].doneAt) { return this.note.info.todos[index].doneAt = new Date().toDateString().slice(0, 17) }
        this.note.info.todos[index].doneAt=null
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
    }
  }, 
  components: {
      noteFooter
    }
}
