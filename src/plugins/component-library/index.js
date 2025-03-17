import SrGlobalSnackBar from '../../components/SrGlobalSnackBar/SrGlobalSnackBar.vue'
import SrAdminApp from '../../components/SrAdminApp/SrAdminApp.vue'
import SrBreadcrumb from '../../components/SrBreadcrumb/SrBreadcrumb.vue'
import SrPageHeader from '../../components/SrPageHeader/SrPageHeader.vue'
import SrPageLayout from '../../components/SrPageLayout/SrPageLayout.vue'

export default {
    install (Vue, options = {}) {
        Vue.component('SrGlobalSnackBar', SrGlobalSnackBar)
        Vue.component('SrAdminApp', SrAdminApp)
        Vue.component('SrPageLayout', SrPageLayout)
        Vue.component('SrPageHeader', SrPageHeader)
        Vue.component('SrBreadcrumb', SrBreadcrumb)
    }
}
