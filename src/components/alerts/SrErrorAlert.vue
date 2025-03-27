<template>
  <v-alert
      prominent
      dismissible
      type="error"
      v-bind="$attrs"
      v-on="$listeners"
      icon="mdi-alert">
    <slot/>
  </v-alert>
</template>

<script>
export default {
    name: 'SrErrorAlert',
    inheritAttrs: false
}
</script>
