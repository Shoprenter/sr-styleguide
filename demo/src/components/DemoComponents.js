import DemoPageLayout from './DemoPageLayout/DemoPageLayout.vue'
import DemoIcons from './_sections/DemoIcons/DemoIcons.vue'
import DemoCodeBlock from './DemoCodeBlock/DemoCodeBlock.vue'
import DemoInputs from './_sections/DemoInputs/DemoInputs.vue'
import DemoMenu from './_sections/DemoMenu/DemoMenu.vue'
import DemoButtons from './_sections/DemoButtons/DemoButtons.vue'
import DemoItemRow from './DemoItemRow/DemoItemRow.vue'
import DemoFormRow from './_sections/DemoFormRow/DemoFormRow.vue'
import DemoLayouts from './_sections/DemoLayouts/DemoLayouts.vue'
import DemoTables from './_sections/DemoTables/DemoTables.vue'
import DemoPagination from './_sections/DemoPagination/DemoPagination.vue'
import DemoAppContainers from './_sections/DemoAppContainers/DemoAppContainers.vue'
import DemoAlerts from './_sections/DemoAlerts/DemoAlerts.vue'
import DemoMilestoneIndicators
    from './_sections/DemoMilestoneIndicators/DemoMilestoneIndicators.vue'
import DemoTabs from './_sections/DemoTabs/DemoTabs.vue'
import DemoPages from './_sections/DemoPages/DemoPages.vue'
import DemoListPage from './_sections/DemoPages/DemoListPage.vue'
import DemoFormPage from './_sections/DemoPages/DemoFormPage.vue'
import DemoGettingStarted from './_sections/DemoGettingStarted/DemoGettingStarted.vue'

export default {
    install (Vue, options = {}) {
        Vue.component('DemoPageLayout', DemoPageLayout)
        Vue.component('DemoIcons', DemoIcons)
        Vue.component('DemoCodeBlock', DemoCodeBlock)
        Vue.component('DemoInputs', DemoInputs)
        Vue.component('DemoMenu', DemoMenu)
        Vue.component('DemoButtons', DemoButtons)
        Vue.component('DemoItemRow', DemoItemRow)
        Vue.component('DemoFormRow', DemoFormRow)
        Vue.component('DemoLayouts', DemoLayouts)
        Vue.component('DemoTables', DemoTables)
        Vue.component('DemoPagination', DemoPagination)
        Vue.component('DemoAppContainers', DemoAppContainers)
        Vue.component('DemoAlerts', DemoAlerts)
        Vue.component('DemoMilestoneIndicators', DemoMilestoneIndicators)
        Vue.component('DemoTabs', DemoTabs)
        Vue.component('DemoPages', DemoPages)
        Vue.component('DemoListPage', DemoListPage)
        Vue.component('DemoFormPage', DemoFormPage)
        Vue.component('DemoGettingStarted', DemoGettingStarted)
    }
}
