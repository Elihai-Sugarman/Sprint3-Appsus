
export default {
    props: ['note'],
    template: `

       <section class="note-footer search-bar-btns">
       <button class="note-footer-btn  edit"></button>
       <button class="note-footer-btn  color"></button>
       <button class="note-footer-btn  mail"></button>
       <button class="note-footer-btn  pin"></button>
       <button class="note-footer-btn  trash" @click.stop="remove(note.id)"></button>
       </section>
    `,
    methods: {
        what(note) {
           console.log(note) 
      },
      remove(noteId) {
            this.$emit('remove', noteId)
        },
 
    }, 
}

    
