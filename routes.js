import homePage from './views/app-home.cmp.js'
import aboutPage from './views/app-about.cmp.js'
import emailApp from './apps/mail/pages/email-app.cmp.js'
import keepApp from './apps/keep/pages/keep-app.cmp.js'

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
            path: '/mail',
            component: emailApp,
        },
        {
            path: '/keep',
            component: keepApp,
        },
    ],
}

export const router = createRouter(routerOptions)
