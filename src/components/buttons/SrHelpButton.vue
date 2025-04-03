<template>
  <v-btn v-if="helpUrl" :href="helpUrl" target="_blank" :ripple="false" class="admin-help-button link-secondary" text>
    {{ this.$vuetify.lang.t('$vuetify.help') }}<sr-help-circle-outline-icon/>
  </v-btn>
</template>
<script>
export default {
    name: 'SrHelpButton',
    inheritAttrs: false,
    computed: {
        helpUrl () {
            return this.$route && this.$route.meta && this.$route.meta.helpUrl
        }
    }
}
</script>
