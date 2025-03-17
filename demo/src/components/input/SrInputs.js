import InputSave from '../../components/input/InputSave.vue'
import SearchTextField from '../../components/input/SearchTextField.vue'
import SelectSave from '../../components/input/SelectSave.vue'
import SrSwitch from '../../components/input/SrSwitch.vue'
import TextAreaSave from '../../components/input/TextAreaSave.vue'

export default {
    install(Vue, options = {}) {
        Vue.component('InputSave', InputSave)
        Vue.component('SearchTextField', SearchTextField)
        Vue.component('SelectSave', SelectSave)
        Vue.component('SrSwitch', SrSwitch)
        Vue.component('TextAreaSave', TextAreaSave)
    }
}
