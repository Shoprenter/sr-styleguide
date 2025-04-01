<template>
  <v-tab v-bind="$attrs" v-on="$listeners"
         class="sr-tab"
         :ripple="false">
    <slot />
  </v-tab>
</template>

<script>
import './SrTab.scss'
export default {
    name: 'SrTab',
    inheritAttrs: false
}
</script>
