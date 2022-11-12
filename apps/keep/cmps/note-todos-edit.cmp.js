
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'
import { noteService } from '../services/note-service.js'
export default {
  props: ['note'],
  emits:['clearNote'],
  template: `
    <section  class="">
       <ul id="vue">
           <li v-for="(text,index) in note.info.todos" @click="selected(index)" :key="note.id"><input placeholder="Place Your Picture's Title" v-model="note.info.todos[index].txt"></input>
           </li>
       </ul>
       <button class="form-save-btn" @click="save">Save Changes</button>
       </section>
       `,

       
  data() {
    return {
      date: '',
  
    }
  },
  methods: {
    save() {
      $emit('clearNote',this.note)
      // unmount($note);
      noteService.save(this.note)
        
        .then(note => {
          showSuccessMsg(`Note saved (Note id: ${note.id})`)
        })
        .catch(err => {
          console.log('OOps:', err)
          showErrorMsg(`Cannot save note`)
        })
    }
  },

  components: {
    
  }
}




//     template: `

//         getDate() {
//           this.note.info.toISOString().slice(0,10)  
//       },
//   }, 

// }