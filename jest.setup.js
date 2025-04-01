import Vue from 'vue'
import Vuetify from 'vuetify'
import { SrStyleguideComponents } from './src/index'
import { config, createLocalVue } from '@vue/test-utils'

import { preset } from './src/plugins/vuetify/preset'

Vue.use(Vuetify)
Vue.use(SrStyleguideComponents)

const localVue = createLocalVue()
localVue.use(SrStyleguideComponents)

// Globálisan beállítjuk az alapértelmezett `localVue`-t
config.global = {
    ...config.global,
    localVue
}

global.createVuetify = () => new Vuetify(preset)
