<template>
  <v-textarea
      class="sr-textarea"
      v-bind="$attrs"
      v-on="$listeners"
      dense
      outlined
      persistent-hint
      clearable
      auto-grow
      row-height="1"
  />
</template>

<script>
export default {
    name: 'SrTextarea',
    inheritAttrs: false
}
</script>
