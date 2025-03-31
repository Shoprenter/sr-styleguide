<template>
  <v-tabs v-bind="$attrs" v-on="$listeners"
          class="sr-tabs"
          color="var(--sr-black)"
          background-color="transparent">
    <slot />
  </v-tabs>
</template>

<script>
import './SrTabs.scss'
export default {
    name: 'SrTabs',
    inheritAttrs: false
}
</script>
