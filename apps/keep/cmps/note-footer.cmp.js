
import { router } from "../../../routes.js"
import { noteService } from '../services/note-service.js'
export default {
    props: ['note'],
    template: `

       <section class="note-footer search-bar-btns">
       <button class="note-footer-btn  edit"></button>
       <button class="note-footer-btn  color"><input class="colorP" type="color" id="colorpicker" value="#0000ff"></button>
       <button class="note-footer-btn  mail" v-on:click="mailOutMsg"></button>
       <button class="note-footer-btn " :class="[this.isActive ? pin : unPin]" v-on:click="pinChange" ></button>
       <button class="note-footer-btn  trash" v-on:click="removeNote"></button>
       </section>
    `,
    created() {
        this.router = router.routerOptions
        this.notes = noteService.query()
    },
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

            this.note.isPinned = !this.note.isPinned
            
        },
        mailOutMsg() {
            console.log(router.push({ path: 'mail/:id' }))
            // router.push({ path: '/#' })
        }
 
    },
    //  components: {
    //     router,
       
    // },
    
}

    
