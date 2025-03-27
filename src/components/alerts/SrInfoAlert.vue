<template>
  <v-alert dismissible prominent type="info" v-bind="$attrs" v-on="$listeners">
    <template v-slot:prepend>
      <v-icon class="sr-alert-icon" color="white" size="32">mdi-information</v-icon>
    </template>
    <slot/>
  </v-alert>
</template>

<script>
import './SrAlerts.scss'
export default {
    name: 'SrInfoAlert',
    inheritAttrs: false
}
</script>
