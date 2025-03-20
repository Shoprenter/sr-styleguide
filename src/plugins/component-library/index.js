import SrIcons from './library/SrIcons'
import SrSlimLayout from '../../components/SrSlimLayout/SrSlimLayout.vue'
import SrSlimHeading from '../../components/SrSlimLayout/SrSlimHeading.vue'
import SrSlimContent from '../../components/SrSlimLayout/SrSlimContent.vue'

export default {
    install (Vue, options = {}) {
        Vue.use(SrIcons)

        Vue.component('SrSlimLayout', SrSlimLayout)
        Vue.component('SrSlimHeading', SrSlimHeading)
        Vue.component('SrSlimContent', SrSlimContent)

        // eg: Vue.component('SrGlobalSnackBar', SrGlobalSnackBar)
    }
}
