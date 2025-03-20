<template>
  <v-text-field
      v-bind="$attrs"
      v-on="$listeners"
      dense
      outlined
      persistent-hint
      clearable
  />
</template>

<script>
export default {
    name: 'SrInputField'
}
</script>
