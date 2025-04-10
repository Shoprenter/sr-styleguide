import Vue from 'vue'
import { SrStyleguide, SrStyleguideComponents } from '../src/index'
import App from './src/components/SrAdminApp/SrAdminApp.vue'
import router from './src/router/router'
import StyleGuide from './src/components/SrStyleGuide/SrStyleGuide.vue'
import DemoComponents from './src/components/DemoComponents'

Vue.use(SrStyleguideComponents)
Vue.use(DemoComponents)

Vue.mixin({
    methods: {
        translate: (key, replacements) => key
    }
})

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
