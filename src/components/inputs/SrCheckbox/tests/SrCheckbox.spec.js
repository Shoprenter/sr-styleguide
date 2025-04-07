import { mount } from '@vue/test-utils'
import SrCheckbox from '../SrCheckbox.vue'

describe('SrCheckbox', () => {
    let vuetify

    beforeEach(() => {
        vuetify = createVuetify()
    })

    it('sets input-value correctly', () => {
        const wrapper = mount(SrCheckbox, {
            vuetify,
            propsData: { value: true }
        })
        const checkbox = wrapper.findComponent({ name: 'v-checkbox' })
        expect(checkbox.props('inputValue')).toBe(true)
    })

    it('emits input event on change', async () => {
        const wrapper = mount(SrCheckbox, {
            vuetify,
            propsData: { value: false }
        })
        const checkbox = wrapper.findComponent({ name: 'v-checkbox' })
        checkbox.vm.$emit('change', true)
        await wrapper.vm.$nextTick()
        expect(wrapper.emitted().input).toBeTruthy()
        expect(wrapper.emitted().input[0]).toEqual([true])
    })

    it('passes attributes', () => {
        const wrapper = mount(SrCheckbox, {
            vuetify,
            attrs: { 'data-test': 'checkbox-test' }
        })
        expect(wrapper.html()).toContain('data-test="checkbox-test"')
    })
})
