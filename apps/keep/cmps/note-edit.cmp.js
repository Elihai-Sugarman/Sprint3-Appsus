import noteImg from './note-img-edit.cmp.js'
import noteText from './note-text-edit.cmp.js'
import noteTodos from './note-todos-edit.cmp.js'
import noteVideo from './note-video-edit.cmp.js'
import { noteService } from '../services/note-service.js'

export default {
   props: ['note'],
     template: `
        <section class="note-list flex">

        <ul class="clean-list">
                <li  :key="note.id" >
                    <component :is="note.type" :style="note.style" class="note" :note="note"></component>
                </li> 
        </ul>
        </section> 
        
    `,
     
//     data() {
//         return {
//             noteToEdit: noteService.getEmptyNote(),
//         }
//     },
//    methods: {
//       save() {
//          const note = noteService.save(this.noteToEdit)
//          this.$emit('saved', note)
//          this.noteToEdit = noteService.getEmptyNote()
//       },
//       pickerChange() {
// console.log(this.note,"note")
//       },

//    },
        methods: {
        
    },
    computed: {
       
 },
    components: {
        noteImg,
        noteText,
        noteTodos,
        noteVideo,
        noteService,
    }

}