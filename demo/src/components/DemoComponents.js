import SrPageLayout from './SrPageLayout/SrPageLayout.vue'
import SrStyleGuideIcons from './sections/SrStyleGuideIcons/SrStyleGuideIcons.vue'
import SrCodeBlock from './SrCodeBlock/SrCodeBlock.vue'
import SrStyleGuideInputs from './sections/SrStyleGuideInputs/SrStyleGuideInputs.vue'
import SrStyleGuideMenu from './sections/SrStyleGuideMenu/SrStyleGuideMenu.vue'
import SrStyleGuideButtons from './sections/StStyleGuideButtons/SrStyleGuideButtons.vue'
import SrStyleGuideItemRow from './SrStyleGuideItemRow/SrStyleGuideItemRow.vue'
import SrStyleGuideFormRow from './sections/SrStyleGuideFormRow/SrStyleGuideFormRow.vue'
import SrStyleGuideLayouts from './sections/SrStyleGuideLayouts/SrStyleGuideLayouts.vue'
import SrStyleGuideTables from './sections/SrStyleGuideTables/SrStyleGuideTables.vue'
import SrStyleGuidePagination from './sections/SrStyleguidePagination/SrStyleGuidePagination.vue'
import SrStyleGuideAppContainers from './sections/SrStyleGuideAppContainers/SrStyleGuideAppContainers.vue'
import SrStyleGuideAlerts from './sections/SrStyleGuideAlerts/SrStyleGuideAlerts.vue'
import SrStyleGuideMilestoneIndicators
    from './sections/SrStyleGuideMilestoneIndicators/SrStyleGuideMilestoneIndicators.vue'
import SrStyleGuideTabs from './sections/SrStyleGuideTabs/SrStyleGuideTabs.vue'
import DemoPages from './sections/DemoPages/DemoPages.vue'

export default {
    install (Vue, options = {}) {
        Vue.component('SrPageLayout', SrPageLayout)
        Vue.component('SrStyleGuideIcons', SrStyleGuideIcons)
        Vue.component('SrCodeBlock', SrCodeBlock)
        Vue.component('SrStyleGuideInputs', SrStyleGuideInputs)
        Vue.component('SrStyleGuideMenu', SrStyleGuideMenu)
        Vue.component('SrStyleGuideButtons', SrStyleGuideButtons)
        Vue.component('SrStyleGuideItemRow', SrStyleGuideItemRow)
        Vue.component('SrStyleGuideFormRow', SrStyleGuideFormRow)
        Vue.component('SrStyleGuideLayouts', SrStyleGuideLayouts)
        Vue.component('SrStyleGuideTables', SrStyleGuideTables)
        Vue.component('SrStyleGuidePagination', SrStyleGuidePagination)
        Vue.component('SrStyleGuideAppContainers', SrStyleGuideAppContainers)
        Vue.component('SrStyleGuideAlerts', SrStyleGuideAlerts)
        Vue.component('SrStyleGuideMilestoneIndicators', SrStyleGuideMilestoneIndicators)
        Vue.component('SrStyleGuideTabs', SrStyleGuideTabs)
        Vue.component('DemoPages', DemoPages)
    }
}
