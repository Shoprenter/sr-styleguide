<template>
  <v-tab v-bind="$attrs" v-on="$listeners">
    <slot />
  </v-tab>
</template>

<script>
export default {
    name: 'SrTab',
    inheritAttrs: false
}
</script>
