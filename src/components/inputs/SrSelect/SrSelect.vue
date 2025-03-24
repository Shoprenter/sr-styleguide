<template>
  <v-select
      v-bind="$attrs"
      v-on="$listeners"
      menu-props="offset-y"
      clearable
      dense hide-details outlined
  >
    <template #item="{item}">
      <div v-html="item.text"></div>
    </template>
    <template #selection="{item}">
      <div v-html="item.text"></div>
    </template>
  </v-select>
</template>

<script>
export default {
    name: 'SrSelect',
    inheritAttrs: false
}
</script>
