export default {
    props: ['email'],
    template: `
    <td><router-link :to="'/mail/' + email.id">{{ email.from }}</router-link></td>
    <td><router-link :to="'/mail/' + email.id">{{ email.subject }}</router-link></td>
    <td><router-link :to="'/mail/' + email.id">{{ email.sentAt }}</router-link></td>
    `,
    method: {},
}
