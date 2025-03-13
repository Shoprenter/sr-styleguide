import vuetifyInstance from './plugins/vuetify'
import SrSubmitButton from "./components/SrSubmitButton/SrSubmitButton.vue";
import SrTextField from "./components/SrTextField/SrTextField.vue";

export const SrStyleguidePlugin = {
    install(Vue, options = {}) {
        console.log("Styleguide installed!");

        Vue.component('SrSubmitButton', SrSubmitButton)
        Vue.component('SrTextField', SrTextField)
    }
};

export const SrStyleguide = vuetifyInstance

