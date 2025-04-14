import SrFormRow from '../../../components/form/SrFormRow/SrFormRow.vue'
import SrFormDivider from '../../../components/form/SrFormDivider/SrFormDivider.vue'

export default {
    install (Vue, options = {}) {
        Vue.component('SrFormRow', SrFormRow)
        Vue.component('SrFormDivider', SrFormDivider)
    }
}
