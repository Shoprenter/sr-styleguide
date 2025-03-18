import SrAdminApp from './components/SrAdminApp/SrAdminApp.vue'
import SrPageLayout from './components/SrPageLayout/SrPageLayout.vue'
import SrPageHeader from './components/SrPageHeader/SrPageHeader.vue'
import SrBreadcrumb from './components/SrBreadcrumb/SrBreadcrumb.vue'

export default {
    install (Vue, options = {}) {
        Vue.component('SrAdminApp', SrAdminApp)
        Vue.component('SrPageLayout', SrPageLayout)
        Vue.component('SrPageHeader', SrPageHeader)
        Vue.component('SrBreadcrumb', SrBreadcrumb)
    }
}
