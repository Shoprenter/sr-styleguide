<template>
  <td
      class="sr-simple-table-filter-td"
      v-bind="$attrs"
      v-on="$listeners"
      :style="{ maxWidth: maxWidth, minWidth: minWidth }"
  >
    <slot/>
  </td>
</template>

<script>
export default {
    name: 'SrSimpleTableFilterTd',
    inheritAttrs: false,
    props: {
        maxWidth: {
            type: String,
            default: '150px'
        },
        minWidth: {
            type: String,
            default: null
        }
    }
}
</script>
