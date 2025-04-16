import Vue from 'vue'
import { SrStyleguide, SrStyleguideComponents } from '../src/index'
import router from './src/router/router'
import App from './src/components/DemoApp/DemoApp.vue'
import DemoComponents from './src/components/DemoComponents'

Vue.use(SrStyleguideComponents)
Vue.use(DemoComponents)

const app = new Vue({
    vuetify: SrStyleguide,
    router,
    render: h => h(App)
})

app.$router.addRoutes([
    {
        path: '/',
        name: 'local-styleguide',
        component: App,
        meta: {
            breadcrumbs: [
                {
                    to: '/sr-styleguide',
                    text: 'Home'
                },
                {
                    to: '/',
                    text: 'SR Style Guide'
                }
            ],
            title: 'SR Style Guide',
            helpUrl: 'https://www.npmjs.com/package/@shoprenter/sr-styleguide'
        }
    }
])

app.$mount('#app')
