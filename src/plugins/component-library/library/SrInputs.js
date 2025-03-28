import SrInputField from '../../../components/inputs/SrInputField/SrInputField.vue'
import SrSelect from '../../../components/inputs/SrSelect/SrSelect.vue'
import SrCheckbox from '../../../components/inputs/SrCheckbox/SrCheckbox.vue'
import SrSwitch from '../../../components/inputs/SrSwitch/SrSwitch.vue'
import SrRadio from '../../../components/inputs/SrRadio/SrRadio.vue'
import SrRadioGroup from '../../../components/inputs/SrRadio/SrRadioGroup.vue'
import SrDatePicker from '../../../components/inputs/SrDatePicker/SrDatePicker.vue'

export default {
    install (Vue, options = {}) {
        Vue.component('SrInputField', SrInputField)
        Vue.component('SrSelect', SrSelect)
        Vue.component('SrCheckbox', SrCheckbox)
        Vue.component('SrSwitch', SrSwitch)
        Vue.component('SrRadio', SrRadio)
        Vue.component('SrRadioGroup', SrRadioGroup)
        Vue.component('SrDatePicker', SrDatePicker)
    }
}
