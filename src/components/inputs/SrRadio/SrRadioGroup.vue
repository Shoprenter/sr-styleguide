<template>
  <v-radio-group
      v-bind="$attrs"
      v-on="$listeners"
  >
    <slot></slot>
  </v-radio-group>
</template>

<script>
export default {
    name: 'SrRadioGroup',
    inheritAttrs: false
}
</script>
