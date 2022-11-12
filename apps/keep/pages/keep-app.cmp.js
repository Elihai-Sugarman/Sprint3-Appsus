import { noteService } from '../services/note-service.js'
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'
import noteFilter from '../cmps/note-filter.cmp.js'
import noteDetails from './note-details.cmp.js'
import noteList from '../cmps/note-list.cmp.js'
import noteEditing from '../cmps/note-edit.cmp.js'

export default {
    // emits:['remove','pinChange','backgroundChange'],
    template: `
   <section class="keep-app flex flex-row">
        <section class="note-nav">
        <note-editing class="note-editing" :note='noteToEdit'/>
        </section>
        
        <section class="note-content flex flex-column">
           <note-filter class="note-search" @filter="filter"/>
           <note-list @selected="selectNote" @remove="removeNote($event)" @pinChange="pinChange($event)" @todoAddDate="todoAddDate($event)" @backgroundChange="backgroundChange($event)" @duplicate="duplicate($event)" @editNote="editNote($event)" :notes="notesToShow"/>
           <note-details @close="selectedNote = null" v-if="selectedNote" :note="selectedNote"/>
        </section>
   </section>
    `,
    
    created() {
        this.notes = noteService.query()
    },
    data() {
        return {
            notes: [],
            selectedNote: null,
            filterBy: null,
            noteToEdit:"",
        }
    },
    methods: {
        removeNote(noteId) {
            console.log(noteId)
            const idx = this.notes.findIndex(note => note.id === noteId)
            noteService.remove(noteId)  
                    this.notes.splice(idx, 1)
                    showSuccessMsg(`Note ${noteId} deleted`)
                // })
                // .catch(err =>{
                //     console.log('OOPS', err)
                //     showErrorMsg('Cannot remove Note')
                // })
        },
        duplicate(noteId) {
            const idx = this.notes.findIndex(note => note.id === noteId)
            let duplicatedNote = this.notes[idx]
            noteService.noteDuplicate(duplicatedNote)
            .then(() => {
                this.notes = noteService.query()
                showSuccessMsg(`Note Duplicated`)
                })
        },
        editNote(noteId) {
              this.noteToEdit=noteId
        this.$emit('editNote',noteId)
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
        todoAddDate(todoChange) {
            const idx = this.notes.findIndex(note => note.id === todoChange[0]) 
            if (!this.notes[idx].info.todos[todoChange[1]].doneAt) {this.notes[idx].info.todos[todoChange[1]].doneAt = new Date().toDateString().slice(0, 17) }
            else if (this.notes[idx].info.todos[todoChange[1]].doneAt) { this.notes[idx].info.todos[todoChange[1]].doneAt = "" }
            noteService.save(this.notes[idx])
        },
        pinChange(noteId) {
            const idx = this.notes.findIndex((note) => note.id === noteId)
            let noteItem = this.notes[idx]
            noteItem.isPinned =!noteItem.isPinned
            noteService.saveUnshift(noteItem)
             .then(() => {
                    const idx = this.notes.findIndex(note => note.id === noteId)
                    this.notes.splice(idx, 1)
                    this.notes.unshift(noteItem)
                })
                .catch(err =>{
                    console.log('OOPS', err)
                    showErrorMsg('Cannot remove Note')
                })
        },
        backgroundChange(styleUpdate) {
            let noteId = styleUpdate[0]
            let newColor = styleUpdate[1]
            const idx = this.notes.findIndex((note) => note.id === noteId)
            let style = { backgroundColor: newColor }
            let updatingNote = this.notes[idx]
            updatingNote.style = style
            noteService.save(this.notes[idx])
    }
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
        noteService,
        noteEditing,
        // noteEdit,
        noteList,
    },
}