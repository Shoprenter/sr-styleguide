<template>
  <v-tabs v-bind="$attrs" v-on="$listeners">
    <slot />
  </v-tabs>
</template>

<script>
export default {
    name: 'SrTabs',
    inheritAttrs: false
}
</script>
