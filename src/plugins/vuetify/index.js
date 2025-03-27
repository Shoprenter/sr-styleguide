import Vue from 'vue'
import Vuetify from 'vuetify'
import { preset } from './preset'

Vue.use(Vuetify)

const htmlLang = document.documentElement.lang || 'hu'
preset.lang.current = htmlLang
export default new Vuetify(preset)
