import SrTabs from '../../../components/tabs/SrTabs/SrTabs.vue'
import SrTab from '../../../components/tabs/SrTab/SrTab.vue'
import SrTabItem from '../../../components/tabs/SrTabItem/SrTabItem.vue'
import SrTabsItems from '../../../components/tabs/SrTabsItems/SrTabsItems.vue'
import SrLanguageTab from '../../../components/tabs/SrLanguageTab/SrLanguageTab.vue'

export default {
    install (Vue, options = {}) {
        Vue.component('SrTabs', SrTabs)
        Vue.component('SrTab', SrTab)
        Vue.component('SrTabItem', SrTabItem)
        Vue.component('SrTabsItems', SrTabsItems)
        Vue.component('SrLanguageTab', SrLanguageTab)
    }
}
