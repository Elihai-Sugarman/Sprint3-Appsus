
import { noteService } from '../services/note-service.js'

export default {
  props: ['note'],
    template: `
    <section class="form-note-img">
       <h1 class="form-text" >Change Title</h1>
       <input class="note-title" placeholder="Place Your Picture's Title" v-model="note.info.title" ></input>
       <h1 class="form-text">Change Picture's URL</h1>
       <input class="note-title" :placeholder=imgUrl() v-model="note.info.url"></input>
       <button class="form-save-btn" @click="save">Save Changes</button>
       </section>
    `,
    data() {
        return {
            note: this.note,
            selectedNote: null,
            filterBy: null,
            noteToEdit:"",
        }
    },
  methods: {
    getNoteTitle() { 
      console.log(note,this.note)
       return this.note.info.title
    },
    saveNewInfo() {
      console.log(this.note)
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
