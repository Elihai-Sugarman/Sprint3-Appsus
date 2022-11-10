import noteFooter from "./note-footer.cmp.js"
export default {
    props: ['note'],
    template: `
    <section v-on:click="what(note)" class="note-todos">
       <section class="note-header"></section>
       <ul>
       <li v-for="(text,index) in note.info.todos" :change="dateReturn(index)" :key="note.id">{{note.info.todos[index].txt}} {{date}} 
       </li>
       </ul>
       
       <noteFooter :note="note"/>
       </section>
       `,
    data() {
      return {
        date: '',
       
      };
    },
    methods: {
        what(note) {
           console.log(note) 
        },
        getDate() {
          this.note.info.toISOString().slice(0,10)  
      },
      dateReturn(index) {
          if (!this.note.info.todos[index].doneAt) {return this.date=""}
          return this.date=new Date(this.note.info.todos[index].doneAt).toDateString().slice(0,17)
        }
  }, 
  components: {
      noteFooter
    }
}
