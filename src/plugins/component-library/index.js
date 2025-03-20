import SrIcons from './library/SrIcons'
import SrButtons from './library/SrButtons'

export default {
    install (Vue, options = {}) {
        Vue.use(SrIcons)
        Vue.use(SrButtons)

        // eg: Vue.component('SrGlobalSnackBar', SrGlobalSnackBar)
    }
}
