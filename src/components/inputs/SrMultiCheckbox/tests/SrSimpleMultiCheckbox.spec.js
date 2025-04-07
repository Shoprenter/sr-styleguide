import { mount } from '@vue/test-utils'
import SrSimpleMultiCheckbox from '../SrSimpleMultiCheckbox.vue'

describe('SrSimpleMultiCheckbox', () => {
    let vuetify

    beforeEach(() => {
        vuetify = createVuetify()
    })

    it('displays loading state when loading is true', () => {
        const wrapper = mount(SrSimpleMultiCheckbox, {
            vuetify,
            propsData: { loading: true, value: [], multiCheckboxOptions: [] },
            stubs: ['v-progress-circular', 'sr-primary-button', 'sr-array-checkbox']
        })
        expect(wrapper.find('v-progress-circular-stub').exists()).toBe(true)
    })

    it('displays sr-array-checkbox components when loading is false', () => {
        const options = [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' }
        ]
        const wrapper = mount(SrSimpleMultiCheckbox, {
            vuetify,
            propsData: { loading: false, value: [], multiCheckboxOptions: options },
            stubs: ['v-progress-circular', 'sr-primary-button', 'sr-array-checkbox']
        })
        const checkboxComponents = wrapper.findAll('sr-array-checkbox-stub')
        expect(checkboxComponents.length).toBe(options.length)
    })

    it('emits input event when modelValue changes', async () => {
        const options = [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' }
        ]
        const wrapper = mount(SrSimpleMultiCheckbox, {
            vuetify,
            propsData: { loading: false, value: [], multiCheckboxOptions: options },
            stubs: ['v-progress-circular', 'sr-primary-button', 'sr-array-checkbox']
        })
        wrapper.vm.modelValue = ['1']
        await wrapper.vm.$nextTick()
        expect(wrapper.emitted().input).toBeTruthy()
        expect(wrapper.emitted().input[0]).toEqual([['1']])
    })

    it('emits select-all event when selectAllCheckboxes is called', async () => {
        const options = [{ value: '1', label: 'Option 1' }]
        const wrapper = mount(SrSimpleMultiCheckbox, {
            vuetify,
            propsData: { loading: false, value: [], multiCheckboxOptions: options },
            stubs: ['v-progress-circular', 'sr-primary-button', 'sr-array-checkbox']
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
        const options = [{ value: '1', label: 'Option 1' }]
        const wrapper = mount(SrSimpleMultiCheckbox, {
            vuetify,
            propsData: { loading: false, value: ['1'], multiCheckboxOptions: options },
            stubs: ['v-progress-circular', 'sr-primary-button', 'sr-array-checkbox']
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

    it('handles empty checkbox container gracefully', async () => {
        const options = [{ value: '1', label: 'Option 1' }]
        const wrapper = mount(SrSimpleMultiCheckbox, {
            vuetify,
            propsData: { loading: false, value: ['1'], multiCheckboxOptions: options },
            stubs: ['v-progress-circular', 'sr-primary-button', 'sr-array-checkbox']
        })
        const baseWrapper = wrapper.findComponent({ name: 'BaseMultiCheckbox' })
        baseWrapper.vm.$refs.checkboxWrapper = document.createElement('div')
        await baseWrapper.vm.selectAllCheckboxes()
        await baseWrapper.vm.unSelectAllCheckboxes()
        expect(wrapper.emitted()['select-all']).toEqual([[]])
        expect(wrapper.emitted()['unselect-all']).toEqual([[]])
    })
})
