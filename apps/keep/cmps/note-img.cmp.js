
export default {
    props: ['note'],
    template: `
    <section v-on:click="what(note)" class="note-img">
       <section class="note-header"></section>
       
       <section class="note-footer"></section>
       </section>
    `,
    methods: {
        what(note) {
           console.log(note) 
        },
    }, 
}
