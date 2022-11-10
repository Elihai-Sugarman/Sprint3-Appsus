
export default {
    props: ['note'],
    template: `

       <section class="note-footer">
       <button class="note-footer-btn trash"></button>
       <button class="note-footer-btn edit"></button>
       <button class="note-footer-btn mail"></button>
       <button class="note-footer-btn color"></button>
       <button class="note-footer-btn pin"></button>
       </section>
    `,
    methods: {
        what(note) {
           console.log(note) 
        },
    }, 
}


