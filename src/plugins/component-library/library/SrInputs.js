import SrInputField from '../../../components/inputs/SrInputField/SrInputField.vue'
import SrSelect from '../../../components/inputs/SrSelect/SrSelect.vue'
import SrCheckbox from '../../../components/inputs/SrCheckbox/SrCheckbox.vue'

export default {
    install (Vue, options = {}) {
        Vue.component('SrInputField', SrInputField)
        Vue.component('SrSelect', SrSelect)
        Vue.component('SrCheckbox', SrCheckbox)
    }
}
