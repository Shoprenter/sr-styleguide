<template>
  <v-radio-group
      v-bind="$attrs"
      v-on="$listeners"
      @change="updateValue"
  >
    <slot></slot>
  </v-radio-group>
</template>

<script>
export default {
    name: 'SrRadioGroup',
    inheritAttrs: false,
    methods: {
        updateValue (newValue) {
            this.$emit('input', newValue)
        }
    }
}
</script>
