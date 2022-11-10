
import { utilService } from '../../../services/util.service.js'

export const noteService = {
    query,
    remove,
    save,
    getEmptyNote,
}
const NOTES_KEY = 'notes'

const FIRST_NOTES = [
    {
        id: "n101",
        type: "noteText",
        isPinned: true,
        info: { txt: `Third times a Charm
When you use the expression ‘Third time/’s a Charm’ you mean that the third time
something is attempted, luck is sure to result. The phrase is also used as an
actual good luck charm that’s spoken just before you try something for the
third time.`  }
    },
    {
        id: "n102",
        type: "noteImg",
        isPinned: false,
        info: {url: "https://pixabay.com/images/id-3554261/",title: "Bobi and Me"},
        style: { backgroundColor: "#00d" }
    },
    {
        id: "n103",
        type: "noteTodos",
        isPinned: true,
        info: {label: "Get my stuff together", todos:[{txt: "Driving liscence", doneAt: null},{ txt: "Coding power", doneAt: 187111111 }]
        }
    },
    {
        id: "n104",
        type: "noteText",
        isPinned: true,
        info: { txt: "Fullstack Me Baby!" }
    },
    {
        id: "n105",
        type: "noteVideo",
        isPinned: false,
        info: {url: "http://some-img/me",title: "Bobi and Me"},
        style: { backgroundColor: "#00d" }
    },
    {
        id: "n106",
        type: "noteTodos",
        isPinned: true,
        info: {label: "Get my stuff together", todos:[{txt: "Driving liscence", doneAt: null},{ txt: "Coding power", doneAt: 187111111 }]
        }
    }
]
_createNotes()
function query() {
    return utilService.loadFromStorage(NOTES_KEY)
}
function remove(noteId) {
    const notes = query()
    const idx = notes.findIndex((note) => note.id === noteId)
    notes.splice(idx, 1)
    utilService.saveToStorage(NOTES_KEY, notes)
}
function save(note) {
    note.id = utilService.makeId()
    const notes = query()
    notes.push(note)
    utilService.saveToStorage(NOTES_KEY, notes)
    return note
}
function getEmptyNote() {
    return {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: false,
        info: { txt: "" }}
}
function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY)
    if (!notes || !notes.length) {
        notes = []
        
        FIRST_NOTES.map((note) =>
            notes.push(
                _createNote(
                    note.id,
                    note.type,
                    note.isPinned,
                    note.info,
                )
            )
        )
        utilService.saveToStorage(NOTES_KEY, notes)
    }
    return notes
}
// "../../../assets/img/note-img-1.jpg"
function _createNote(id,type,isPinned,info) {
    const note = {
        id: id,
        type: type,
        isPinned: isPinned,
        info: info,
    }
    return note
}
// ********




// import { storageService } from './async-storage.service.js'
// import gBotes from '../../data/books.json' assert {type: 'json'}
// import {utilService} from './util.service.js'


// _createBooks()
// function _createBooks() {
//     let books = utilService.loadFromStorage(BOOKS_KEY)
//     if(!books || !books.length) {
//       books = gBooks
//       utilService.saveToStorage(BOOKS_KEY, books)
//     }
// }

// function query() {
//   return storageService.query(BOOKS_KEY)
// }

// function getById(bookId) {
//   return storageService.get(BOOKS_KEY, bookId)
// }

// function addReview(bookId, review) {
//   review.id = utilService.makeId()
//   return storageService.get(noteS_KEY, noteId)
//     .then(note => {
//       if (!note.reviews) note.reviews = []
//       note.reviews.push(review)
//       return storageService.put(noteS_KEY, book)
//     })
// }

// function removeReview(bookId, reviewId) {
//   return storageService.get(BOOKS_KEY, noteId)
//     .then(note => {
//       note.reviews = note.reviews.filter(review => review.id !== reviewId)
//       return storageService.put(BOOKS_KEY, note)
//     })
// }