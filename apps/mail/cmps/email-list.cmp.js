import emailPreview from './email-preview.cmp.js'

export default {
    props: ['emails'],
    template: `
    <table>
        <tr>
            <td>From</td>
            <td>Subject</td>
            <td>Sent At</td>
        </tr>
        <tr v-for="email in emails" :key="email.id">
            <email-preview :email="email"/>
        </tr>
    </table>
    `,
    components: {
        emailPreview,
    },
}
