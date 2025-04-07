import SrInputField from '../../../components/inputs/SrInputField/SrInputField.vue'
import SrSelect from '../../../components/inputs/SrSelect/SrSelect.vue'
import SrCheckbox from '../../../components/inputs/SrCheckbox/SrCheckbox.vue'
import SrArrayCheckbox from '../../../components/inputs/SrCheckbox/SrArrayCheckbox.vue'
import SrSwitch from '../../../components/inputs/SrSwitch/SrSwitch.vue'
import SrRadio from '../../../components/inputs/SrRadio/SrRadio.vue'
import SrRadioGroup from '../../../components/inputs/SrRadio/SrRadioGroup.vue'
import SrDatePicker from '../../../components/inputs/SrDatePicker/SrDatePicker.vue'
import SrMultiCheckbox from '../../../components/inputs/SrMultiCheckbox/SrMultiCheckbox.vue'
import SrSimpleMultiCheckbox from "../../../components/inputs/SrMultiCheckbox/SrSimpleMultiCheckbox.vue";

export default {
    install (Vue, options = {}) {
        Vue.component('SrInputField', SrInputField)
        Vue.component('SrSelect', SrSelect)
        Vue.component('SrCheckbox', SrCheckbox)
        Vue.component('SrArrayCheckbox', SrArrayCheckbox)
        Vue.component('SrMultiCheckbox', SrMultiCheckbox)
        Vue.component('SrSimpleMultiCheckbox', SrSimpleMultiCheckbox)
        Vue.component('SrSwitch', SrSwitch)
        Vue.component('SrRadio', SrRadio)
        Vue.component('SrRadioGroup', SrRadioGroup)
        Vue.component('SrDatePicker', SrDatePicker)
    }
}
