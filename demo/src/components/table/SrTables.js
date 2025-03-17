import AdditionalFilters from '../../components/table/AdditionalFilters.vue'
import BulkEditActionBar from '../../components/table/BulkEditActionBar.vue'
import OverlayWrapper from '../../components/table/OverlayWrapper.vue'
import Pagination from '../../components/table/Pagination.vue'
import SelectAllPlus from '../../components/table/SelectAllPlus.vue'


export default {
    install(Vue, options = {}) {
        Vue.component('AdditionalFilters', AdditionalFilters)
        Vue.component('BulkEditActionBar', BulkEditActionBar)
        Vue.component('OverlayWrapper', OverlayWrapper)
        Vue.component('Pagination', Pagination)
        Vue.component('SelectAllPlus', SelectAllPlus)
    }
}
