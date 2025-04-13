<template>
  <v-switch
      :input-value="value"
      :label="getLabel"
      :ripple="false"
      inset
      v-bind="$attrs"
      v-on="$listeners"
      @change="$emit('input', $event)"
  />
</template>

<script>
export default {
    name: 'SrSwitch',
    inheritAttrs: false,
    props: {
        value: {
            type: [Boolean, Number],
            required: true
        }
    },
    computed: {
        getLabel () {
            return this.value ? this.$vuetify.lang.t('$vuetify.yes') : this.$vuetify.lang.t('$vuetify.no')
        }
    }
}
</script>
