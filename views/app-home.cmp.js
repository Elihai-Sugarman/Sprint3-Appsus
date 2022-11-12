export default {
    template: `
        <section class="home-page flex">
        <section class="home-nav">
        <router-link :to="'keep'">
            <button class="keep"></button>
        </router-link>
        <router-link :to="'mail'">
            <button class="mail"></button>
        </router-link>
        <router-link :to="'book'">
            <button class="book"></button>
        </router-link>
        </section>
        </section>
    `,
}
