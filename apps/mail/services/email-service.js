import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

const EMAILS_KEY = 'emailsDB'

const gEmails = [
    {
        id: utilService.makeId(),
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: new Date('2022-11-03').toDateString(),
        // sentAt: 1551133930594,
        from: 'momo@momo.com',
        to: 'user@appsus.com',
    },
    {
        id: utilService.makeId(),
        subject: 'Bills',
        body: `Greetings,
                Attached are several accounts for which your account is still charged.
                We would appreciate it if you could address the issue as soon as possible.`,
        isRead: true,
        sentAt: new Date('2022-11-01').toDateString(),
        from: 'koko@koko.com',
        to: 'user@appsus.com',
    },
    {
        id: utilService.makeId(),
        subject: 'Greetings from Norway',
        body: `Hi, how are you?
            You won't believe how much fun we have here. When we come back, get ready to hear a lot of stories :)
            It's a shame you're not here with us, but you're in our hearts... and don't worry, we'll buy you something at duty free on the way back.
            Regards to everyone!`,
        isRead: false,
        sentAt: new Date('2022-10-28').toDateString(),
        from: 'popo@popo.com',
        to: 'friend@appsus.com',
    },
]
const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus',
}
const criteria = {
    status: 'inbox/sent/trash/draft',
    txt: 'puki', // no need to support complex text search
    isRead: true, // (optional property, if missing: show all)
    isStared: true, // (optional property, if missing: show all)
    lables: ['important', 'romantic'], // has any of the labels
}

_createEmails()

function _createEmails() {
    let emails = utilService.loadFromStorage(EMAILS_KEY)
    if (!emails || !emails.length) {
        emails = gEmails
        utilService.saveToStorage(EMAILS_KEY, emails)
    }
    return emails
}

export const emailService = {
    query,
    get,
    remove,
    save,
}

function query() {
    return storageService.query(EMAILS_KEY)
}

function get(emailId) {
    return storageService.get(EMAILS_KEY, emailId)
}

function remove(emailId) {
    return storageService.remove(EMAILS_KEY, emailId)
}

function save(email) {
    if (email) return storageService.put(EMAILS_KEY, email)
    return storageService.post(EMAILS_KEY, email)
}
