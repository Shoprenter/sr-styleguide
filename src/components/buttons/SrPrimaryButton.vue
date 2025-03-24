<template>
  <v-btn color="primary" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </v-btn>
</template>
<script>
export default {
    name: 'SrPrimaryButton',
    inheritAttrs: false
}
</script>
