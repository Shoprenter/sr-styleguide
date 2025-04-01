import { mount } from '@vue/test-utils'
import SrCheckboxArray from '../SrArrayCheckbox.vue'

function mountComponent (options = {}) {
    const vuetify = createVuetify()
    return mount(SrCheckboxArray, {
        vuetify,
        attachTo: document.body,
        ...options
    })
}

describe('SrArrayCheckbox.vue', () => {
    it('renders v-checkbox component', () => {
        const wrapper = mountComponent()
        expect(wrapper.findComponent({ name: 'v-checkbox' }).exists()).toBe(true)
    })

    it('binds input-value to modelValue prop', () => {
        const wrapper = mountComponent({
            propsData: { modelValue: ['apple'], checkboxValue: 'apple' }
        })
        const checkbox = wrapper.findComponent({ name: 'v-checkbox' })
        expect(checkbox.props('inputValue')).toContain('apple')
    })

    it('passes checkboxValue to v-checkbox value prop', () => {
        const wrapper = mountComponent({
            propsData: { checkboxValue: 'banana' }
        })
        const checkbox = wrapper.findComponent({ name: 'v-checkbox' })
        expect(checkbox.props('value')).toBe('banana')
    })

    it('emits change:modelValue when checkbox is clicked', async () => {
        const wrapper = mountComponent({
            propsData: { modelValue: [], checkboxValue: 'orange' }
        })

        const checkbox = wrapper.findComponent({ name: 'v-checkbox' })
        await checkbox.vm.$emit('change', ['orange'])

        expect(wrapper.emitted('change:modelValue')).toBeTruthy()
        expect(wrapper.emitted('change:modelValue')[0][0]).toEqual(['orange'])
    })

    it('supports number values in checkboxValue and modelValue', async () => {
        const wrapper = mountComponent({
            propsData: { modelValue: [1, 2], checkboxValue: 2 }
        })

        const checkbox = wrapper.findComponent({ name: 'v-checkbox' })
        expect(checkbox.props('inputValue')).toContain(2)
        expect(checkbox.props('value')).toBe(2)
    })

    it('works with default empty modelValue array', () => {
        const wrapper = mountComponent()
        const checkbox = wrapper.findComponent({ name: 'v-checkbox' })
        expect(Array.isArray(checkbox.props('inputValue'))).toBe(true)
        expect(checkbox.props('inputValue')).toHaveLength(0)
    })

    it('updates correctly when props change', async () => {
        const wrapper = mountComponent({
            propsData: { modelValue: ['x'], checkboxValue: 'y' }
        })

        await wrapper.setProps({ modelValue: ['y'] })
        const checkbox = wrapper.findComponent({ name: 'v-checkbox' })
        expect(checkbox.props('inputValue')).toContain('y')
    })
})
