import noteImg from './note-img.cmp.js'
import noteText from './note-text.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteVideo from './note-video.cmp.js'

export default {
    props: ['notes'],
    template: `
        <section class="note-list">
        <ul class="clean-list pinned">
                <li v-for="note in isPinned" :key="note.id" @click="showDetails(note)">
                    <component :is="note.type" class="note" :note="note"></component>
                </li> 
        </ul>
        <ul class="clean-list un-pinned">
                <li v-for="note in isNotPinned" :key="note.id" @click="showDetails(note)">
                    <component :is="note.type" class="note" :note="note"></component>
                </li>
            </ul>
        </section> 
    `,
 
    methods: {
        remove(noteId) {
            this.$emit('remove', noteId)
        },
        showDetails(note) {
            this.$emit('selected', note)
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