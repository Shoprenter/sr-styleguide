<template>
  <v-switch
      :input-value="value"
      :label="getLabel"
      :ripple="false"
      hide-details
      inset
      v-bind="$attrs"
      v-on="$listeners"
      @change="$emit('input', $event)"
  />
</template>

<script>
import translator from '../../translator/ComponentTranslator'

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
            return this.value ? translator.translate('yes') : translator.translate('no')
        }
    }
}
</script>
