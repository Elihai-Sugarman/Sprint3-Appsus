import noteFooter from "./note-footer.cmp.js"
export default {
    props: ['note'],
    template: `
    <section v-on:click="what(note)" class="note-todos">
       <section class="note-header"></section>
       
       <section class="note-footer"></section>
       <noteFooter :note="note"/>
       there will  light</section>
       `,
    methods: {
        what(note) {
           console.log(note) 
        },
        getDate() {
          this.note.info.toISOString().slice(0,10)  
        }
  }, 
  components: {
      noteFooter
    }
}
