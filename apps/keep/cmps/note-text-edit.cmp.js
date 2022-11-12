import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'
import { noteService } from '../services/note-service.js'

export default {
  props: ['note'],
  template: `
    <section class="note-txt">
    <h1 class="form-text" >Change Note Text</h1>
       <textarea class="note-textarea-form" placeholder="Place Your Picture's Title" v-model="note.info.txt" ></textarea>
      <button class="form-save-btn" @click="save">Save Changes</button>
    </section>
    `,
  data() {
    return {
      note: this.note,
      selectedNote: null,
      filterBy: null,
      noteToEdit: "",
    }
   },
  methods: {
    vidUrl() {
      return `${this.note.info.url}`
    },
     getNoteTitle() { 
      console.log(note,this.note)
       return this.note.info.title
    },
 
           imgUrl() {
         return this.note.info.url
    },
     save(){
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
      noteService,
    }
}

