<template>
  <!-- eslint-disable-next-line -->
  <v-btn v-bind="$attrs" v-on="$listeners" :outlined="false" large color="error">
    {{ text }}
  </v-btn>
</template>

<script>
export default {
    name: 'SrSubmitButton',
    props:
  {
      text: {
          type: String,
          required: true
      },
      color: {
          type: String,
          default: 'primary',
          validator: function (value) {
              return ['primary', 'secondary', 'success', 'info', 'warning', 'error'].includes(value)
          }
      }
  },
    inheritAttrs: false

}

</script>
