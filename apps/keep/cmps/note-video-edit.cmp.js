import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'
import { noteService } from '../services/note-service.js'

export default {
  props: ['note'],
  template: `
    <section class="note-video">
    <h1 class="form-text" >Change Title</h1>
       <section class="note-header"></section>
       <input class="note-title" placeholder="Place Your Picture's Title" v-model="note.info.title" ></input>
       <h1 class="form-text">Change Video's URL (embed)</h1>
       <input class="note-title" :placeholder=imgUrl() v-model="note.info.url"></input>
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
             showSuccessMsg(`Note saved (Note id: ${mote.id})`)
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
  

