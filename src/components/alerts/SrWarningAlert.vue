<template>
  <v-alert
      prominent
      dismissible
      type="warning"
      v-bind="$attrs"
      v-on="$listeners"
      icon="mdi-exclamation">
    <slot />
  </v-alert>
</template>

<script>
export default {
    name: 'SrWarningAlert',
    inheritAttrs: false
}
</script>
