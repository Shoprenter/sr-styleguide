import SrIcons from './library/SrIcons'
import SrButtons from './library/SrButtons'
import SrFormRow from './library/SrFormRow'

export default {
    install (Vue, options = {}) {
        Vue.use(SrIcons)
        Vue.use(SrButtons)
        Vue.use(SrFormRow)

        // eg: Vue.component('SrGlobalSnackBar', SrGlobalSnackBar)
    }
}
