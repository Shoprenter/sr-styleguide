import { mount } from '@vue/test-utils'
import SrRadioGroup from '../SrRadioGroup.vue'

describe('SrRadioGroup', () => {
    let vuetify

    beforeEach(() => {
        vuetify = createVuetify()
    })

    it('renders slot content', () => {
        const slotContent = '<div class="slot-test">Test Slot</div>'
        const wrapper = mount(SrRadioGroup, {
            vuetify,
            slots: { default: slotContent }
        })
        expect(wrapper.html()).toContain('Test Slot')
    })

    it('passes attributes to v-radio-group', () => {
        const wrapper = mount(SrRadioGroup, {
            vuetify,
            attrs: { 'data-test': 'test-attribute' }
        })
        expect(wrapper.html()).toContain('data-test="test-attribute"')
    })

    it('emits input event with v-model when value changes', async () => {
        const wrapper = mount(SrRadioGroup, {
            vuetify
        })
        const radioGroup = wrapper.findComponent({ name: 'v-radio-group' })
        radioGroup.vm.$emit('change', 'new value')
        await wrapper.vm.$nextTick()
        expect(wrapper.emitted().input).toBeTruthy()
        expect(wrapper.emitted().input[0]).toEqual(['new value'])
    })
})
