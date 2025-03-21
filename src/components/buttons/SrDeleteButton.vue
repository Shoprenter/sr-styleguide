<template>
  <v-btn color="error" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </v-btn>
</template>
<script>
export default {
    name: 'SrDeleteButton',
    inheritAttrs: false
}
</script>
