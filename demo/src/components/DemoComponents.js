import SrAdminApp from './SrAdminApp/SrAdminApp.vue'
import SrPageLayout from './SrPageLayout/SrPageLayout.vue'
import SrPageHeader from './SrPageHeader/SrPageHeader.vue'
import SrBreadcrumb from './SrBreadcrumb/SrBreadcrumb.vue'
import SrStyleGuideIcons from './sections/SrStyleGuideIcons/SrStyleGuideIcons.vue'
import SrCodeBlock from './SrCodeBlock/SrCodeBlock.vue'
import SrStyleGuideInputs from './sections/SrStyleGuideInputs/SrStyleGuideInputs.vue'
import SrStyleGuideMenu from './sections/SrStyleGuideMenu/SrStyleGuideMenu.vue'
import SrStyleGuideButtons from './sections/StStyleGuideButtons/SrStyleGuideButtons.vue'
import SrStyleGuideItemRow from './SrStyleGuideItemRow/SrStyleGuideItemRow.vue'
import SrStyleGuideFormRow from './sections/SrStyleGuideFormRow/SrStyleGuideFormRow.vue'
import SrStyleGuideLayouts from './sections/SrStyleGuideLayouts/SrStyleGuideLayouts.vue'
import SrStyleGuideTables from './sections/SrStyleGuideTables/SrStyleGuideTables.vue'
import SrStyleGuideAppContainers from './sections/SrStyleGuideAppContainers/SrStyleGuideAppContainers.vue'

export default {
    install (Vue, options = {}) {
        Vue.component('SrAdminApp', SrAdminApp)
        Vue.component('SrPageLayout', SrPageLayout)
        Vue.component('SrPageHeader', SrPageHeader)
        Vue.component('SrBreadcrumb', SrBreadcrumb)
        Vue.component('SrStyleGuideIcons', SrStyleGuideIcons)
        Vue.component('SrCodeBlock', SrCodeBlock)
        Vue.component('SrStyleGuideInputs', SrStyleGuideInputs)
        Vue.component('SrStyleGuideMenu', SrStyleGuideMenu)
        Vue.component('SrStyleGuideButtons', SrStyleGuideButtons)
        Vue.component('SrStyleGuideItemRow', SrStyleGuideItemRow)
        Vue.component('SrStyleGuideFormRow', SrStyleGuideFormRow)
        Vue.component('SrStyleGuideLayouts', SrStyleGuideLayouts)
        Vue.component('SrStyleGuideTables', SrStyleGuideTables)
        Vue.component('SrStyleGuideAppContainers', SrStyleGuideAppContainers)
    }
}
