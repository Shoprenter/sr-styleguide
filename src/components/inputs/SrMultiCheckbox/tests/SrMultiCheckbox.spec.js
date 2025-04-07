import { mount } from '@vue/test-utils'
import SrMultiCheckbox from '../SrMultiCheckbox.vue'

describe('SrMultiCheckbox', () => {
    let vuetify

    beforeEach(() => {
        vuetify = createVuetify()
    })

    it('displays loading state when loading is true', () => {
        const wrapper = mount(SrMultiCheckbox, {
            vuetify,
            propsData: { loading: true },
            slots: { default: '<div class="test-slot">Content</div>' },
            stubs: ['v-progress-circular', 'sr-primary-button']
        })
        expect(wrapper.find('v-progress-circular-stub').exists()).toBe(true)
        expect(wrapper.find('.test-slot').exists()).toBe(false)
    })

    it('displays default slot content when loading is false', () => {
        const wrapper = mount(SrMultiCheckbox, {
            vuetify,
            propsData: { loading: false },
            slots: { default: '<div class="test-slot">Content</div>' },
            stubs: ['v-progress-circular', 'sr-primary-button']
        })
        expect(wrapper.find('.test-slot').exists()).toBe(true)
        expect(wrapper.find('v-progress-circular-stub').exists()).toBe(false)
    })

    it('emits select-all event when selectAllCheckboxes is called', async () => {
        const wrapper = mount(SrMultiCheckbox, {
            vuetify,
            propsData: { loading: false },
            slots: { default: '<input type="checkbox" aria-checked="false" />' },
            stubs: ['v-progress-circular', 'sr-primary-button']
        })
        const container = document.createElement('div')
        const checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        checkbox.setAttribute('aria-checked', 'false')
        checkbox.click = jest.fn()
        container.appendChild(checkbox)
        const baseWrapper = wrapper.findComponent({ name: 'BaseMultiCheckbox' })
        baseWrapper.vm.$refs.checkboxWrapper = container
        await baseWrapper.vm.selectAllCheckboxes()
        expect(checkbox.click).toHaveBeenCalled()
        expect(wrapper.emitted()['select-all']).toBeTruthy()
    })

    it('emits unselect-all event when unSelectAllCheckboxes is called', async () => {
        const wrapper = mount(SrMultiCheckbox, {
            vuetify,
            propsData: { loading: false },
            slots: { default: '<input type="checkbox" aria-checked="true" />' },
            stubs: ['v-progress-circular', 'sr-primary-button']
        })
        const container = document.createElement('div')
        const checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        checkbox.setAttribute('aria-checked', 'true')
        checkbox.click = jest.fn()
        container.appendChild(checkbox)
        const baseWrapper = wrapper.findComponent({ name: 'BaseMultiCheckbox' })
        baseWrapper.vm.$refs.checkboxWrapper = container
        await baseWrapper.vm.unSelectAllCheckboxes()
        expect(checkbox.click).toHaveBeenCalled()
        expect(wrapper.emitted()['unselect-all']).toBeTruthy()
    })

    it('does not emit events if there are no checkboxes', async () => {
        const wrapper = mount(SrMultiCheckbox, {
            vuetify,
            propsData: { loading: false },
            slots: { default: '' },
            stubs: ['v-progress-circular', 'sr-primary-button']
        })
        const baseWrapper = wrapper.findComponent({ name: 'BaseMultiCheckbox' })
        baseWrapper.vm.$refs.checkboxWrapper = document.createElement('div')
        await baseWrapper.vm.selectAllCheckboxes()
        await baseWrapper.vm.unSelectAllCheckboxes()
        expect(wrapper.emitted()['select-all']).toEqual([[]])
        expect(wrapper.emitted()['unselect-all']).toEqual([[]])
    })
})
