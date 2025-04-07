<template>
  <base-multi-checkbox :loading="loading" @select-all="$emit('select-all')" @unselect-all="$emit('unselect-all')">
    <template #checkboxes>
      <slot/>
    </template>
  </base-multi-checkbox>
</template>

<script>
import BaseMultiCheckbox from './BaseMultiCheckbox.vue'

export default {
    name: 'SrMultiCheckbox',
    components: { BaseMultiCheckbox },
    props: {
        loading: {
            type: Boolean,
            default: false
        }
    },
    emits: ['select-all', 'unselect-all']
}
</script>
