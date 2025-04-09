import SrSlimLayout from '../../../components/layouts/slim/SrSlimLayout/SrSlimLayout.vue'
import SrSlimHeading from '../../../components/layouts/slim/SrSlimHeading/SrSlimHeading.vue'
import SrSlimContent from '../../../components/layouts/slim/SrSlimContent/SrSlimContent.vue'
import SrStandardLayout from '../../../components/layouts/standard/SrStandardLayout/SrStandardLayout.vue'

export default {
    install (Vue, options = {}) {
        Vue.component('SrSlimLayout', SrSlimLayout)
        Vue.component('SrStandardLayout', SrStandardLayout)
        Vue.component('SrSlimHeading', SrSlimHeading)
        Vue.component('SrHeading', SrSlimHeading)
        Vue.component('SrSlimContent', SrSlimContent)
        Vue.component('SrContent', SrSlimContent)
    }
}
