import Vue from 'vue'
import { SrStyleguide, SrStyleguideComponents } from '../src/index'
import App from '../src/components/SrAdminApp/SrAdminApp.vue'
import router from './src/router/router'
import StyleGuide from './src/components/StyleGuide.vue'

Vue.use(SrStyleguideComponents)

Vue.mixin({
    methods: {
        translate: (key, replacements) => key
    }
})

Vue.use(SrStyleguideComponents)

const app = new Vue({
    vuetify: SrStyleguide,
    router,
    render: h => h(App)
})

app.$router.addRoutes([
    {
        path: '/',
        name: 'local-styleguide',
        component: StyleGuide
    }
])

app.$mount('#app')
