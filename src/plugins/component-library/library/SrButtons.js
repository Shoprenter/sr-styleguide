import SrPrimaryButton from '../../../components/buttons/SrPrimaryButton.vue'
import SrDeleteButton from '../../../components/buttons/SrDeleteButton.vue'
import SrHelpButton from '../../../components/buttons/SrHelpButton.vue'

export default {
    install (Vue, options = {}) {
        Vue.component('SrPrimaryButton', SrPrimaryButton)
        Vue.component('SrDeleteButton', SrDeleteButton)
        Vue.component('SrHelpButton', SrHelpButton)
    }
}
