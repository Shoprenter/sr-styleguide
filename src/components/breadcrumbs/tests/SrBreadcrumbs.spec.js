import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import SrBreadcrumbs from '../SrBreadcrumbs/SrBreadcrumbs.vue'

Vue.use(Vuetify)

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('SrBreadcrumbs.vue', () => {
    let vuetify
    let router

    const createWrapper = (routeOptions) => {
        const routes = [
            {
                path: '/user/:id',
                component: { template: '<div></div>' },
                meta: {
                    breadcrumbs: routeOptions.breadcrumbs || []
                }
            }
        ]

        router = new VueRouter({ routes })
        router.push(routeOptions.path || '/user/42')

        vuetify = new Vuetify()

        return mount(SrBreadcrumbs, {
            localVue,
            vuetify,
            router,
            mocks: {
                translate: (text) => text
            }
        })
    }

    it('renders breadcrumbs when route meta has breadcrumb data', () => {
        const wrapper = createWrapper({
            breadcrumbs: [{ text: 'Home', to: '/' }],
            path: '/user/42'
        })

        expect(
            wrapper.findComponent({ name: 'v-breadcrumbs' }).exists()
        ).toBe(true)

        expect(
            wrapper.findAllComponents({ name: 'v-breadcrumbs-item' }).length
        ).toBe(1)
    })

    it('replaces dynamic params in breadcrumb text (e.g., ":id") with actual route params', () => {
        const wrapper = createWrapper({
            breadcrumbs: [{ text: 'User :id', to: '/user/:id' }],
            path: '/user/99'
        })

        expect(wrapper.text()).toContain('User 99')
    })

    it('renders correct number of breadcrumb items based on route meta', () => {
        const wrapper = createWrapper({
            breadcrumbs: [
                { text: 'Home', to: '/' },
                { text: 'Profile', to: '/profile' }
            ]
        })

        expect(
            wrapper.findAllComponents({ name: 'v-breadcrumbs-item' }).length
        ).toBe(2)
    })

    it('does not render breadcrumbs if route.meta.breadcrumbs is empty', () => {
        const wrapper = createWrapper({
            breadcrumbs: []
        })

        expect(
            wrapper.findComponent({ name: 'v-breadcrumbs' }).exists()
        ).toBe(false)
    })

    it('does not throw if breadcrumbs computation fails (e.g., no meta)', () => {
        router = new VueRouter({
            routes: [{ path: '/no-meta', component: { template: '<div></div>' } }]
        })
        router.push('/no-meta')
        vuetify = new Vuetify()

        const mountComponent = () => {
            mount(SrBreadcrumbs, {
                localVue,
                vuetify,
                router,
                mocks: {
                    translate: (text) => text
                }
            })
        }

        expect(mountComponent).not.toThrow()
    })
})
