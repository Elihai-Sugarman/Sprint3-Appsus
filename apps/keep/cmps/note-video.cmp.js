import noteFooter from "./note-footer.cmp.js"
export default {
    props: ['note'],
    template: `
       
       <section v-on:click="what(note)" class="note-video">
       <section class="note-header"></section>
       <h1 class="note-title">{{this.note.info.title}}</h1>
       <iframe width="100%" height="75%" :src=imgUrl() >
       </iframe>
       
       <noteFooter :note="note"/>
       </section>
    `,
    methods: {
        what(note) {
           console.log(note) 
        },
        getDate() {
          this.note.toISOString().slice(0,10)  
      },
      imgUrl() {
            console.log(this.note.info.url)
        return`https://www.youtube.com/embed/${this.note.info.url}?autoplay=1&mute=1`
        }
  },
    components: {
      noteFooter
    }
}


