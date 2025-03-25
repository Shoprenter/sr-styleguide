<template>
  <v-checkbox
      v-bind="$attrs"
      v-on="$listeners"
      hide-details
      :ripple="false"
  ></v-checkbox>
</template>

<script>
export default {
    name: 'SrCheckbox',
    inheritAttrs: false
}
</script>
