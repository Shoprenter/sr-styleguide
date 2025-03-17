import Block from '../../components/layout/Block.vue'
import HomeBlock from '../../components/layout/HomeBlock.vue'
import PageHeader from '../../components/layout/PageHeader.vue'
import PageLayout from '../../components/layout/PageLayout.vue'
import StickyHeader from '../../components/layout/StickyHeader.vue'

export default {
    install(Vue, options = {}) {
        Vue.component('Block', Block)
        Vue.component('HomeBlock', HomeBlock)
        Vue.component('PageHeader', PageHeader)
        Vue.component('PageLayout', PageLayout)
        Vue.component('StickyHeader', StickyHeader)
    }
}
