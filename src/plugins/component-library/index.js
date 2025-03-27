import SrIcons from './library/SrIcons'
import SrButtons from './library/SrButtons'
import SrInputs from './library/SrInputs'
import SrFormRow from './library/SrFormRow'
import SrLayouts from './library/SrLayouts'
import SrTables from './library/SrTables'
import SrAppContainers from './library/SrAppContainers'

export default {
    install (Vue, options = {}) {
        Vue.use(SrIcons)
        Vue.use(SrButtons)
        Vue.use(SrInputs)
        Vue.use(SrFormRow)
        Vue.use(SrLayouts)
        Vue.use(SrTables)
        Vue.use(SrAppContainers)
    }
}
