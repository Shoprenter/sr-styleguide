import SrCard from "../../components/cards/SrCard.vue"
import SrSimpleCard from "../../components/cards/SrSimpleCard.vue";

export default {
    install(Vue, options = {}) {
        Vue.component('SrCard', SrCard)
        Vue.component('SrSimpleCard', SrSimpleCard)
    }
}
