<template>
  <v-alert
      prominent
      dismissible
      type="info"
      v-bind="$attrs"
      v-on="$listeners"
      icon="mdi-information">
    <slot />
  </v-alert>
</template>

<script>
export default {
    name: 'SrInfoAlert',
    inheritAttrs: false
}
</script>
