<template>
  <v-alert dismissible prominent type="warning" v-bind="$attrs" v-on="$listeners">
    <template v-slot:prepend>
      <v-icon class="sr-alert-icon" color="white" size="32">mdi-exclamation</v-icon>
    </template>
    <slot/>
  </v-alert>
</template>

<script>
import './SrAlerts.scss'
export default {
    name: 'SrWarningAlert',
    inheritAttrs: false
}
</script>
