import SrSubmitButton from '../../components/SrSubmitButton/SrSubmitButton.vue'
import SrTextField from '../../components/SrTextField/SrTextField.vue'

export default {
    install (Vue, options = {}) {
        Vue.component('SrSubmitButton', SrSubmitButton)
        Vue.component('SrTextField', SrTextField)
    }
}
