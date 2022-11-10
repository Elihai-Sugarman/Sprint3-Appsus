// export default {
//     template: `
//         <footer class="keep-app">
//             <h1>Keep App</h1>
//         </footer>
//     `,
// }
import { noteService } from '../services/note-service.js'

import noteFilter from '../cmps/note-filter.cmp.js'
import noteDetails from './note-details.cmp.js'
// import noteEdit from '../cmps/'
import noteList from '../cmps/note-list.cmp.js'

export default {
    template: `
   <section class="keep-app flex flex-row">
        <section class="note-nav" ></section>
        <section class="note-content flex flex-column">
           <note-filter class="note-search" @filter="filter"/>
           <note-list @selected="selectNote" @remove="removeNote" :notes="notesToShow"/>
           <note-details @close="selectedNote = null" v-if="selectedNote" :note="selectedNote"/>
           <!-- <note-edit @saved="noteSaved"/> -->
        </section>
   </section>
    `,
    created() {
        this.notes = noteService.query()
        console.log(this.notes = noteService.query())
    },
    data() {
        return {
            notes: [],
            selectedNote: null,
            filterBy: null,
        }
    },
    methods: {
        removeNote(noteId) {
            noteService.remove(noteId)

            const idx = this.notes.findIndex((note) => note.id === noteId)
            this.notes.splice(idx, 1)
        },
        selectNote(note) {
            this.selectedNote = note
        },
        NoteSaved(note) {
            this.notes.push(note)
        },
        filter(filterBy) {
            console.log(filterBy)
            this.filterBy = filterBy
        },
    },
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes
            const { title, toPrice, fromPrice } = this.filterBy
            const regex = new RegExp(title, 'i')
            return this.notes.filter(
                ({ title, listPrice: { amount } }) =>
                    regex.test(title) && amount < toPrice && amount > fromPrice
            )
        },
    },
    components: {
        noteFilter,
        noteDetails,
        // noteEdit,
        noteList,
    },
}