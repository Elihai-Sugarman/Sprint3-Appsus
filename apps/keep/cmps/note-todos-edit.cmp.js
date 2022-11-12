
export default {
  props: ['note'],
    template: `
    <section  class="note-todos">
       <section class="note-header"></section>
       <ul id="vue">
           <li <input>v-for="(text,index) in note.info.todos" :key="note.id">{{note.info.todos[index].txt}}</input>
           </li>
       </ul>
       </section>
       `,
    data() {
      return {
        date: '',
  
      }
    },
    methods: {

  }, 
  components: {
    
    }
}
