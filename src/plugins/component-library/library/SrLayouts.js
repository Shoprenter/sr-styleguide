import SrSlimLayout from '../../../components/layouts/slim/SrSlimLayout/SrSlimLayout.vue'
import SrSlimHeading from '../../../components/layouts/slim/SrSlimHeading/SrSlimHeading.vue'
import SrSlimContent from '../../../components/layouts/slim/SrSlimContent/SrSlimContent.vue'

export default {
    install (Vue, options = {}) {
        Vue.component('SrSlimLayout', SrSlimLayout)
        Vue.component('SrSlimHeading', SrSlimHeading)
        Vue.component('SrSlimContent', SrSlimContent)
    }
}
