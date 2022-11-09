import homePage from './views/app-home.cmp.js'
import aboutPage from './views/app-about.cmp.js'
import keepApp from './apps/keep/pages/keep-app.cmp.js'
import emailApp from './apps/mail/pages/email-app.cmp.js'
import emailDetails from './apps/mail/pages/email-details.cmp.js'

const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: homePage,
        },
        {
            path: '/about',
            component: aboutPage,
        },
        {
            path: '/keep',
            component: keepApp,
        },
        {
            path: '/mail',
            component: emailApp,
        },
        {
            path: '/mail/:id',
            component: emailDetails,
        },
    ],
}

export const router = createRouter(routerOptions)
