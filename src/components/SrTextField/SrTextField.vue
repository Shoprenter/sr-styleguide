<template>
  <v-text-field
      data-class="sr-text-field"
      :hint="hint"
      persistent-hint
      outlined
      dense
      @input="v => $emit('input', v)" />
</template>

<script>
//import './SrTextField.css'

export default {
  name: 'SrTextField',
  props: [
      'hint'
  ]
}
</script>
