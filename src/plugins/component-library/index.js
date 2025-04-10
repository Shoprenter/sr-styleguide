import SrIcons from './library/SrIcons'
import SrButtons from './library/SrButtons'
import SrInputs from './library/SrInputs'
import SrFormRow from './library/SrFormRow'
import SrLayouts from './library/SrLayouts'
import SrTables from './library/SrTables'
import SrPagination from './library/SrPagination'
import SrAppContainers from './library/SrAppContainers'
import SrAlerts from './library/SrAlerts'
import SrMilestoneIndicators from './library/SrMilestoneIndicators'
import SrTabs from './library/SrTabs'
import SrBreadcrumbs from './library/SrBreadcrumbs'

export default {
    install (Vue, options = {}) {
        Vue.use(SrIcons)
        Vue.use(SrButtons)
        Vue.use(SrInputs)
        Vue.use(SrFormRow)
        Vue.use(SrLayouts)
        Vue.use(SrTables)
        Vue.use(SrAlerts)
        Vue.use(SrPagination)
        Vue.use(SrAppContainers)
        Vue.use(SrMilestoneIndicators)
        Vue.use(SrTabs)
        Vue.use(SrBreadcrumbs)
    }
}
