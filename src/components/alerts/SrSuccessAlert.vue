<template>
  <v-alert dismissible prominent type="success" v-bind="$attrs" v-on="$listeners">
    <template v-slot:prepend>
      <v-icon class="sr-alert-icon" color="white" size="32">mdi-check-circle</v-icon>
    </template>
    <slot/>
  </v-alert>
</template>

<script>
import './SrAlerts.scss'
export default {
    name: 'SrSuccessAlert',
    inheritAttrs: false
}
</script>
