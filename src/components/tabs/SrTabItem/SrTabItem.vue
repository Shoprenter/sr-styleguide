<template>
  <v-tab-item v-bind="$attrs" v-on="$listeners">
    <slot />
  </v-tab-item>
</template>

<script>
export default {
    name: 'SrTabItem',
    inheritAttrs: false
}
</script>
