<template>
  <v-alert
      prominent
      dismissible
      type="success"
      v-bind="$attrs"
      v-on="$listeners"
      icon="mdi-check-circle">
    <slot />
  </v-alert>
</template>

<script>
export default {
    name: 'SrSuccessAlert',
    inheritAttrs: false
}
</script>
