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
        from: 'momo@momo.com',
        to: 'user@appsus.com',
        isStar: false,
    },
    {
        id: utilService.makeId(),
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: new Date('2022-11-03').toDateString(),
        from: 'momo@momo.com',
        to: 'user@appsus.com',
        isStar: false,
    },
    {
        id: utilService.makeId(),
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: new Date('2022-11-03').toDateString(),
        from: 'momo@momo.com',
        to: 'user@appsus.com',
        isStar: false,
    },
    {
        id: utilService.makeId(),
        subject: 'Bills',
        body: `Greetings,\nAttached are several accounts for which your account is still charged.\nWe would appreciate it if you could address the issue as soon as possible.`,
        isRead: false,
        sentAt: new Date('2022-11-01').toDateString(),
        from: 'koko@koko.com',
        to: 'user@appsus.com',
        isStar: false,
    },
    {
        id: utilService.makeId(),
        subject: 'Greetings from Norway',
        body: `Hi, how are you?\nYou won't believe how much fun we have here. When we come back, get ready to hear a lot of stories :)\nIt's a shame you're not here with us, but you're in our hearts... and don't worry, we'll buy you something at duty free on the way back.\nRegards to everyone!`,
        isRead: true,
        sentAt: new Date('2022-10-28').toDateString(),
        from: 'user@appsus.com',
        to: 'popo@popo.com',
        isStar: false,
    },
    {
        id: utilService.makeId(),
        subject: 'AD MATAY!!!',
        body: `This is not working, please help me`,
        isRead: true,
        sentAt: new Date('2022-11-10').toDateString(),
        from: 'user@appsus.com',
        to: 'friend@appsus.com',
        isStar: false,
    },
    {
        id: utilService.makeId(),
        subject: 'HOLIDAY SALES!',
        body: `Only today and for the next two weeks - crazy deals!
        On all store items!
        
        Come now to the branch nearest to your home and enjoy our products at an affordable price.
        waiting for you :)`,
        isRead: false,
        sentAt: new Date('2022-10-28').toDateString(),
        from: 'friend@appsus.com',
        to: 'user@appsus.com',
        isStar: false,
    },
]
const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus',
}
const criteria = {
    status: 'inbox',
    txt: '', // no need to support complex text search
    isRead: true, // (optional property, if missing: show all)
    isStared: true, // (optional property, if missing: show all)
    lables: ['important', 'romantic'], // has any of the labels
}
const gCheckedEmails = []

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
    EMAILS_KEY,
    query,
    get,
    remove,
    save,
    setStatus,
    getStatus,
    setText,
    getText,
    setCheckedEmails,
    getCheckedEmails,
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

function setStatus(status) {
    criteria.status = status
}

function getStatus() {
    return criteria.status
}

function setText(text) {
    criteria.txt = text
}

function getText() {
    return criteria.txt
}

function setCheckedEmails(checkedEmails) {
    gCheckedEmails = checkedEmails
}

function getCheckedEmails() {
    return gCheckedEmails
}
