<template>
  <v-radio
      v-bind="$attrs"
      v-on="$listeners"
      :ripple="false"
      color="primary"
  >
    <template v-slot:label>
      <slot></slot>
    </template>
  </v-radio>
</template>

<script>
export default {
    name: 'SrRadio',
    inheritAttrs: false
}
</script>
