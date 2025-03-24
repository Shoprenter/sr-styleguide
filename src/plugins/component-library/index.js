import SrIcons from './library/SrIcons'
import SrButtons from './library/SrButtons'
import SrInputs from './library/SrInputs'
import SrFormRow from './library/SrFormRow'
import SrSlimLayout from '../../components/SrSlimLayout/SrSlimLayout.vue'
import SrSlimHeading from '../../components/SrSlimLayout/SrSlimHeading.vue'
import SrSlimContent from '../../components/SrSlimLayout/SrSlimContent.vue'

export default {
    install (Vue, options = {}) {
        Vue.use(SrIcons)
        Vue.use(SrButtons)
        Vue.use(SrInputs)
        Vue.use(SrFormRow)

        Vue.component('SrSlimLayout', SrSlimLayout)
        Vue.component('SrSlimHeading', SrSlimHeading)
        Vue.component('SrSlimContent', SrSlimContent)

        // eg: Vue.component('SrGlobalSnackBar', SrGlobalSnackBar)
    }
}
