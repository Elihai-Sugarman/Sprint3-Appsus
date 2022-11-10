import noteFooter from "./note-footer.cmp.js"
export default {
    props: ['note'],
    template: `
       
       <section v-on:click="what(note)" class="note-video">
       <section class="note-header"></section>

       
       <noteFooter :note="note"/>
       </section>
    `,
    methods: {
        what(note) {
           console.log(note) 
        },
        getDate() {
          this.note.toISOString().slice(0,10)  
        }
  },
    components: {
      noteFooter
    }
}


