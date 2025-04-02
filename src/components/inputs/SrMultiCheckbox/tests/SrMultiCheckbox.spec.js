import { mount } from '@vue/test-utils'
import SrMultiCheckbox from '../SrMultiCheckbox.vue'

describe('SrMultiCheckbox.vue', () => {
    let vuetify

    beforeEach(() => {
        vuetify = createVuetify()
    })

    it('renders loading state with progress circular', () => {
        const wrapper = mount(SrMultiCheckbox, {
            vuetify,
            propsData: { loading: true }
        })
        expect(wrapper.find('.v-progress-circular').exists()).toBe(true)
        expect(wrapper.find('slot').exists()).toBe(false)
    })

    it('renders slot content when not loading', () => {
        const wrapper = mount(SrMultiCheckbox, {
            vuetify,
            slots: {
                default: '<div class="slot-content">Checkbox content</div>'
            },
            propsData: { loading: false }
        })
        expect(wrapper.find('.slot-content').exists()).toBe(true)
    })

    it('calls selectAllCheckboxes and emits event', async () => {
        const wrapper = mount(SrMultiCheckbox, {
            vuetify,
            propsData: { loading: false },
            slots: {
                default: `
          <div>
            <input type="checkbox" aria-checked="false" />
            <input type="checkbox" aria-checked="true" />
          </div>`
            }
        })

        const spy = jest.spyOn(wrapper.vm, 'selectAllCheckboxes')
        await wrapper.find('[data-test-id="selectAllCheckbox"]').trigger('click')
        expect(spy).toHaveBeenCalled()

        await wrapper.vm.$nextTick()
        expect(wrapper.emitted()['select-all']).toBeTruthy()
    })

    it('calls unSelectAllCheckboxes and emits event', async () => {
        const wrapper = mount(SrMultiCheckbox, {
            vuetify,
            propsData: { loading: false },
            slots: {
                default: `
          <div>
            <input type="checkbox" aria-checked="true" />
            <input type="checkbox" aria-checked="false" />
          </div>`
            }
        })

        const spy = jest.spyOn(wrapper.vm, 'unSelectAllCheckboxes')
        await wrapper.find('[data-test-id="unSelectAllCheckbox"]').trigger('click')
        expect(spy).toHaveBeenCalled()

        await wrapper.vm.$nextTick()
        expect(wrapper.emitted()['unselect-all']).toBeTruthy()
    })

    it('renders both action buttons', () => {
        const wrapper = mount(SrMultiCheckbox, {
            vuetify,
            propsData: { loading: false }
        })
        const buttons = wrapper.findAllComponents({ name: 'sr-primary-button' })
        expect(buttons.length).toBe(2)
    })
})
