import Vue from 'vue'
import Router from 'vue-router'
import StyleGuide from '../components/SrStyleGuide/SrStyleGuide.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/sr-styleguide',
            name: 'styleguide',
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
                title: 'SR Style Guide',
                helpUrl: 'https://www.npmjs.com/package/@shoprenter/sr-styleguide'
            }
        }
    ]
})

export default router
