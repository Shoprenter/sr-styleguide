import SrModule from '../../../components/app-containers/SrModule/SrModule.vue'
import SrPage from '../../../components/app-containers/SrPage/SrPage.vue'

export default {
    install (Vue, options = {}) {
        Vue.component('SrModule', SrModule)
        Vue.component('SrPage', SrPage)
    }
}
