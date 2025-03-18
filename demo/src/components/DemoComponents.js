import SrAdminApp from './SrAdminApp/SrAdminApp.vue'
import SrPageLayout from './SrPageLayout/SrPageLayout.vue'
import SrPageHeader from './SrPageHeader/SrPageHeader.vue'
import SrBreadcrumb from './SrBreadcrumb/SrBreadcrumb.vue'

export default {
    install (Vue, options = {}) {
        Vue.component('SrAdminApp', SrAdminApp)
        Vue.component('SrPageLayout', SrPageLayout)
        Vue.component('SrPageHeader', SrPageHeader)
        Vue.component('SrBreadcrumb', SrBreadcrumb)
    }
}
