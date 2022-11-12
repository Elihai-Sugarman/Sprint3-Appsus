import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

const EMAILS_KEY = 'emailsDB'

const gEmails = [
    {
        id: utilService.makeId(),
        subject: 'Shout Out to Shachar Ron Zohar',
        body: `Thanks for all the help and support during the sprint, we really appreciate it...`,
        isRead: true,
        sentAt: new Date('2022-11-12').toDateString(),
        from: 'user@appsus.com',
        to: 'coding_acadeny@appsus.com',
        isStar: true,
    },
    {
        id: utilService.makeId(),
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: true,
        sentAt: new Date('2022-11-03').toDateString(),
        from: 'user@appsus.com',
        to: 'momo@momo.com',
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
        subject: 'HOLIDAY SALES!',
        body: `Only today and for the next two weeks - crazy deals!
        On all store items!
        
        Come now to the branch nearest to your home and enjoy our products at an affordable price.
        waiting for you :)`,
        isRead: false,
        sentAt: new Date('2022-10-28').toDateString(),
        from: 'bad_ads@appsus.com',
        to: 'user@appsus.com',
        isStar: false,
    },
    {
        id: utilService.makeId(),
        subject: `Let's meet tomorrow`,
        body: `Feels like we didn't catch up for too long, wanna meet somewhere tomorrow?
        
        Call me :)`,
        isRead: true,
        sentAt: new Date('2022-10-27').toDateString(),
        from: 'user@appsus.com',
        to: 'friend@appsus.com',
        isStar: false,
    },
    {
        id: utilService.makeId(),
        subject: 'The home for all developers - including you.',
        body: `Welcome to your personal dashboard, where you can find an introduction to how GitHub works, tools to help you build software, and help merging your first lines of code.`,
        isRead: true,
        sentAt: new Date('2022-10-22').toDateString(),
        from: 'git@appsus.com',
        to: 'user@appsus.com',
        isStar: false,
    },
    {
        id: utilService.makeId(),
        subject: 'PUKI AND MUKI ARE THE BEST!',
        body: `Seriously, you've made our day every single day so far, keep it up!

        I don't know what I will take with me from this course, but I find it hard to believe that I will ever be able to forget you.
        
        Love you`,
        isRead: true,
        sentAt: new Date('2022-10-12').toDateString(),
        from: 'user@appsus.com',
        to: 'puki@muki.com',
        isStar: true,
    },
    {
        id: utilService.makeId(),
        subject: 'Coding Academy - Welcome!',
        body: `Welcome to Coding Academy :)
        Prepare yourself for a lot of work, sweat and tears - but don't worry, it's worth it!`,
        isRead: true,
        sentAt: new Date('2022-09-01').toDateString(),
        from: 'coding_acadeny@appsus.com',
        to: 'user@appsus.com',
        isStar: true,
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
