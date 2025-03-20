import SrAdminApp from './SrAdminApp/SrAdminApp.vue'
import SrPageLayout from './SrPageLayout/SrPageLayout.vue'
import SrPageHeader from './SrPageHeader/SrPageHeader.vue'
import SrBreadcrumb from './SrBreadcrumb/SrBreadcrumb.vue'
import SrStyleGuideIcons from './sections/SrStyleGuideIcons/SrStyleGuideIcons.vue'
import SrCodeBlock from './SrCodeBlock/SrCodeBlock.vue'
import SrStyleGuideLayouts from './sections/SrStyleGuideLayouts/SrStyleGuideLayouts.vue'

export default {
    install (Vue, options = {}) {
        Vue.component('SrAdminApp', SrAdminApp)
        Vue.component('SrPageLayout', SrPageLayout)
        Vue.component('SrPageHeader', SrPageHeader)
        Vue.component('SrBreadcrumb', SrBreadcrumb)
        Vue.component('SrStyleGuideIcons', SrStyleGuideIcons)
        Vue.component('SrCodeBlock', SrCodeBlock)
        Vue.component('SrStyleGuideLayouts', SrStyleGuideLayouts)
    }
}
