import SrIcons from './library/SrIcons'
import SrButtons from './library/SrButtons'
import SrInputs from './library/SrInputs'
import SrFormRow from './library/SrFormRow'

export default {
    install (Vue, options = {}) {
        Vue.use(SrIcons)
        Vue.use(SrButtons)
        Vue.use(SrInputs)
        Vue.use(SrFormRow)

        // eg: Vue.component('SrGlobalSnackBar', SrGlobalSnackBar)
    }
}
