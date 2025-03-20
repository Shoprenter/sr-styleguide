import SrIcons from './library/SrIcons'
import SrButtons from './library/SrButtons'
import SrInputField from '../../components/inputs/SrInputField/SrInputField.vue'

export default {
    install (Vue, options = {}) {
        Vue.use(SrIcons)
        Vue.use(SrButtons)
        Vue.use(SrInputField)

        // eg: Vue.component('SrGlobalSnackBar', SrGlobalSnackBar)
    }
}
