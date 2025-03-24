import SrInputField from '../../../components/inputs/SrInputField/SrInputField.vue'
import SrSelect from '../../../components/inputs/SrSelect/SrSelect.vue'

export default {
    install (Vue, options = {}) {
        Vue.component('SrInputField', SrInputField)
        Vue.component('SrSelect', SrSelect)
    }
}
