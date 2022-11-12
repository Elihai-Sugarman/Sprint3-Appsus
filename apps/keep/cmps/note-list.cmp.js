import noteImg from './note-img.cmp.js'
import noteText from './note-text.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteVideo from './note-video.cmp.js'

export default {
    props: ['notes'],
    // emits:['remove','pinChange','backgroundChange'],
    template: `
        <section class="note-list flex">

        <ul class="clean-list pinned">
                <li v-for="(note,index) in isPinned" :key="note.id" >
                    <component :is="note.type" :style="note.style" @remove="removeNote($event)" @pinChange="pinChange($event)" @todoAddDate="todoAddDate($event)" @backgroundChange="backgroundChange($event)" @duplicate="duplicate($event)" class="note" :note="note"></component>
                </li> 
        </ul>

        <h1 class="lists-devider">Unpinned</h1>

        <ul class="clean-list un-pinned">
                <li v-for="note in isNotPinned" :key="note.id" >
                    <component :is="note.type" :style="note.style" @remove="removeNote($event)" @pinChange="pinChange($event)"  @todoAddDate="todoAddDate($event)" @backgroundChange="backgroundChange($event)" @duplicate="duplicate($event)" class="note" :note="note"></component>
                </li>
            </ul>
        </section> 
    `,
//     data() {
//      note
//  }
    methods: {
        todoAddDate(todoChange) {
        this.$emit('todoAddDate', todoChange)
        },
        // showDetails(note) {
        //     this.$emit('selected', note)
        // }
        removeNote(noteId) {
        this.$emit('remove', noteId)
        },
        duplicate(noteId) {
        this.$emit('duplicate',noteId)
        },
        pinChange(noteId) {
        this.$emit('pinChange', noteId)
        },
        backgroundChange(style) {
            console.log(style)
        this.$emit('backgroundChange', style)
    }
    },
    computed: {
        isPinned() {   
         return this.notes.filter(note => note.isPinned)
        },
        isNotPinned() {   
         return this.notes.filter(note => !note.isPinned)
        },
        
 },
    components: {
        noteImg,
        noteText,
        noteTodos,
        noteVideo
    }
}


//    <router-link :to="'/note/' + note.id">Details</router-link> |
//                     <router-link :to="'/note/edit/' + note.id">Review</router-link> |
//                     <button @click.stop="remove(note.id)">x</button>
//                     </section>