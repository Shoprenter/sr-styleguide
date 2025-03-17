import SrCards from "./cards/SrCards";
import SrForms from "./form/SrForms";
import SrIcons from "./icons/SrIcons";
import SrInputs from "./input/SrInputs";
import SrLayouts from "./layout/SrLayouts";
import SrTables from "./table/SrTables";
import SrUtils from "./util/SrUtils";

import Breadcrumb from '../components/Breadcrumb.vue'
import Expandable from '../components/Expandable.vue'
import SrDialog from '../components/SrDialog.vue'
import GlobalSnackBar from "../components/GlobalSnackBar.vue"
import SrAdminApp from "../components/SrAdminApp.vue"

export default {
    install(Vue, options = {}) {
        Vue.use(SrCards)
        Vue.use(SrForms)
        Vue.use(SrIcons)
        Vue.use(SrInputs)
        Vue.use(SrLayouts)
        Vue.use(SrTables)
        Vue.use(SrUtils)

        Vue.component('Breadcrumb', Breadcrumb)
        Vue.component('Expandable', Expandable)
        Vue.component('SrDialog', SrDialog)
        Vue.component('GlobalSnackBar', GlobalSnackBar)
        Vue.component('SrAdminApp', SrAdminApp)
    }
}
