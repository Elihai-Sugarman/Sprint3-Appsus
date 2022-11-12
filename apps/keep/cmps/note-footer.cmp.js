
import { router } from "../../../routes.js"
// import { noteService } from '../services/note-service.js'
export default {
    props: ['note'],
    emits:['remove','pinChange','backgroundChange','duplicate'],
    template: `

       <section class="note-footer search-bar-btns">
       <button class="note-footer-btn  edit" title="Edit Note"></button>
       <button class="note-footer-btn  duplicate" title="Duplicate Note" @click="$emit('duplicate',note.id)" ></button>
       <button class="note-footer-btn  color" title="Change Color" v-on:click="pickerChange"></button>
       <button class="note-footer-btn mail" title="Email Note" v-on:click="mailOutMsg"></button>
       <button class="note-footer-btn " :title="[this.isActive ? unPinNote : pinNote]" :class="[this.isActive ? pin : unPin]" @click="$emit('pinChange', note.id)" ></button>
       <button class="note-footer-btn trash"  title="Delete Note" @click="$emit('remove',note.id)"></button>
       </section>
       <section class="colorPicker" :class="[this.cPic ? activCPic : deActive]">
       <div class="bton btnBlue" :class="[this.cPic ? activeBtn : deActive ]" v-on:click="noteColor(blue)"></div>
       <div class="bton btnGreen" :class="[this.cPic ? activeBtn : deActive ]" v-on:click="noteColor(green)"></div>
       <div class="bton btnCoffe" :class="[this.cPic ? activeBtn : deActive ]" v-on:click="noteColor(coffee)"></div>
       <div class="bton btnGray" :class="[this.cPic ? activeBtn : deActive ]" v-on:click="noteColor(gray)"></div>
       <div class="bton btnRed" :class="[this.cPic ? activeBtn : deActive ]" v-on:click="noteColor(red)"></div>
       </section>
    `,
    created() {
        this.router = router.routerOptions
        
    },
    data() {
        return {
            isActive: this.note.isPinned,
            activCPic: "cPicker",
            deActive: "",
            activeBtn: "active-btn",
            deActive: "",
            pin: "pin",
            unPin: "unPin",
            pinNote: "Pin Note",
            unPinNote: "Unpin Note",
            cPic: false,
            blue: '#8cd3ec9e',
            green: '#8dd774',
            coffee: '#bf9e53',
            gray: '#faebd7',
            red: '#eb7474',
            color:""
        };
    },
    methods: {
        pickerChange() {
            this.cPic = !this.cPic
        },
        mailOutMsg() {
            // router.push({ path: 'mail/:id' })
        },
        noteColor(color) {
            this.color = color
            let style = [this.note.id, this.color ]
            
            this.$emit('backgroundChange', style)
            this.cPic=false
        }
 
    },
    //  components: {
    //     router,
       
    // },
    
}

    
