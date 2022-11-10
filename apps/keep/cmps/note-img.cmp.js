import noteFooter from "./note-footer.cmp.js"

export default {
    props: ['note'],
    template: `
    <section v-on:click="what(note)" class="note-img">
       <section class="note-header"></section>
       <h1 class="note-title">{{this.note.info.title}}</h1>
       <img :src=imgUrl() alt="Girl in a jacket" width="350"/>
       <section class="note-footer"></section>
       <noteFooter :note="note"/>
       </section>
    `,
    methods: {
        what(note) {
           console.log(note) 
        },
        imgUrl() {
            console.log(this.note.info.url)
         return   this.note.info.url
        }
    },
    components: {
      noteFooter
    }
}
