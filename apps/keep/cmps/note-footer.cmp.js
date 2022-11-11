
export default {
    props: ['note'],
    template: `

       <section class="note-footer search-bar-btns">
       <button class="note-footer-btn  edit"></button>
       <button class="note-footer-btn  color"></button>
       <button class="note-footer-btn  mail"></button>
       <button class="note-footer-btn " :class="[this.isActive ? pin : unPin]" v-on:click="pinChange" ></button>
       <button class="note-footer-btn  trash" v-on:click="removeNote"></button>
       </section>
    `,
    data() {
        return {
            isActive: this.note.isPinned,
            pin: "pin",
            unPin:"unPin",
        };
    },
    methods: {
    //     what(note) {
    //        console.log(note) 
    //   },
        removeNote() {

            this.$emit('remove', this.note.id)
        },
        pinChange() {
            this.note.isPinned=!this.note.isPinned
        }
 
    }, 
    
}

    
