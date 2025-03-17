import Vue from 'vue'
import Router from 'vue-router'
import StyleGuide from '../components/StyleGuide.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/sr-styleguide',
            name: 'styleguide',
            component: StyleGuide
        }
    ]
})

export default router
