import SrTabs from '../../../components/tabs/SrTabs/SrTabs.vue'
import SrTab from '../../../components/tabs/SrTab/SrTab.vue'

export default {
    install (Vue, options = {}) {
        Vue.component('SrTabs', SrTabs)
        Vue.component('SrTab', SrTab)
    }
}
