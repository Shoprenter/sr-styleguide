import SrErrorAlert from '../../../components/alerts/SrErrorAlert.vue'
import SrInfoAlert from '../../../components/alerts/SrInfoAlert.vue'
import SrSuccessAlert from '../../../components/alerts/SrSuccessAlert.vue'
import SrWarningAlert from '../../../components/alerts/SrWarningAlert.vue'

export default {
    install (Vue, options = {}) {
        Vue.component('SrErrorAlert', SrErrorAlert)
        Vue.component('SrInfoAlert', SrInfoAlert)
        Vue.component('SrSuccessAlert', SrSuccessAlert)
        Vue.component('SrWarningAlert', SrWarningAlert)
    }
}
