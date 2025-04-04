import { mount } from '@vue/test-utils'
import SrHelpButton from '../SrHelpButton.vue'

describe('SrHelpButton.vue', () => {
    let vuetify

    beforeEach(() => {
        vuetify = createVuetify()
    })

    it('renders v-btn when helpUrl exists', () => {
        const $route = { meta: { helpUrl: 'http://help.example.com' } }
        const wrapper = mount(SrHelpButton, {
            vuetify,
            mocks: { $route },
            stubs: { 'v-btn': true, 'sr-help-circle-outline-icon': true }
        })

        const btn = wrapper.findComponent({ name: 'v-btn' })
        expect(btn.exists()).toBe(true)
        expect(btn.attributes('href')).toBe('http://help.example.com')
        expect(btn.attributes('target')).toBe('_blank')
    })

    it('does not render v-btn when helpUrl does not exist', () => {
        const $route = { meta: {} }
        const wrapper = mount(SrHelpButton, {
            vuetify,
            mocks: { $route },
            stubs: { 'v-btn': true, 'sr-help-circle-outline-icon': true }
        })

        const btn = wrapper.findComponent({ name: 'v-btn' })
        expect(btn.exists()).toBe(false)
    })
})
