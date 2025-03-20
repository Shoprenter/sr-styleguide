import SrIcons from './library/SrIcons'
import SrInputField from '../../components/inputs/SrInputField/SrInputField.vue'

export default {
    install (Vue, options = {}) {
        Vue.use(SrIcons)
        Vue.use(SrInputField)

        // eg: Vue.component('SrGlobalSnackBar', SrGlobalSnackBar)
    }
}
