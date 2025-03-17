import ProductList from '../../components/form/ProductPicker/ProductList.vue'
import DatePicker from '../../components/form/DatePicker.vue'
import FormGroup from '../../components/form/FormGroup.vue'
import FormRow from '../../components/form/FormRow.vue'


export default {
    install(Vue, options = {}) {
        Vue.component('ProductList', ProductList)
        Vue.component('DatePicker', DatePicker)
        Vue.component('FormGroup', FormGroup)
        Vue.component('FormRow', FormRow)
    }
}
