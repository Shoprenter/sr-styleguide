import Vue from 'vue'
import { SrStyleguide, SrStyleguideComponents } from '../src/index'
import router from './src/router/router'
import StyleGuide from './src/components/SrStyleGuide/SrStyleGuide.vue'
import DemoComponents from './src/components/DemoComponents'

Vue.use(SrStyleguideComponents)
Vue.use(DemoComponents)

const app = new Vue({
    vuetify: SrStyleguide,
    router,
    render: h => h(StyleGuide)
})

app.$router.addRoutes([
    {
        path: '/',
        name: 'local-styleguide',
        component: StyleGuide,
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
            title: 'SR Style Guide'
        }
    }
])

app.$mount('#app')
