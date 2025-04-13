<template>
  <v-tabs-items v-bind="$attrs" v-on="$listeners" class="sr-tabs-items">
    <slot />
  </v-tabs-items>
</template>

<script>
export default {
    name: 'SrTabsItems',
    inheritAttrs: false
}
</script>
