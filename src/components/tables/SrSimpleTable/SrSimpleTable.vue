<template>
  <v-simple-table class="form" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </v-simple-table>
</template>
<script>
export default {
  name: "SrSimpleTable",
  inheritAttrs: false,
}
</script>
