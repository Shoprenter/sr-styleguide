import SrSimpleTable from '../../../components/tables/SrSimpleTable/SrSimpleTable.vue'
import SrSimpleTableFilterTd from '../../../components/tables/SrSimpleTableFilterTd/SrSimpleTableFilterTd.vue'
export default {
    install (Vue, options = {}) {
        Vue.component('SrSimpleTable', SrSimpleTable)
        Vue.component('SrSimpleTableFilterTd', SrSimpleTableFilterTd)
    }
}
