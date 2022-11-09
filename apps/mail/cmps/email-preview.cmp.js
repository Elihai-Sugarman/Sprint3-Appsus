export default {
    props: ['email'],
    template: `
    <td>{{ email.from }}</td>
    <td>{{ email.subject }}</td>
    <td>{{ email.sentAt }}</td>
    `,
}
