import SrIcons from './library/SrIcons'
import SrButtons from './library/SrButtons'
import SrInputs from './library/SrInputs'

export default {
    install (Vue, options = {}) {
        Vue.use(SrIcons)
        Vue.use(SrButtons)
        Vue.use(SrInputs)

        // eg: Vue.component('SrGlobalSnackBar', SrGlobalSnackBar)
    }
}
