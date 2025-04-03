<template>
  <v-tab v-bind="$attrs" v-on="$listeners"
         class="sr-tab"
         active-class="sr-tab-active"
         :ripple="false">
    <slot />
  </v-tab>
</template>

<script>
export default {
    name: 'SrTab',
    inheritAttrs: false
}
</script>
