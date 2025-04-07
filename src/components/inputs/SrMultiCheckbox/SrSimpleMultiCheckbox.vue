<template>
  <base-multi-checkbox :loading="loading" @select-all="$emit('select-all')" @unselect-all="$emit('unselect-all')">
    <template #checkboxes>
      <sr-array-checkbox
          v-for="option in multiCheckboxOptions"
          :key="option.value"
          :label="option.label"
          :model-value="modelValue"
          @change:modelValue="modelValue = $event"
          :checkbox-value="option.value"
      />
    </template>
  </base-multi-checkbox>
</template>

<script>
import BaseMultiCheckbox from './BaseMultiCheckbox.vue';

export default {
  name: 'SrSimpleMultiCheckbox',
  components: {BaseMultiCheckbox},
  model: {
    prop: 'value',
    event: 'input'
  },
  emits: ['input', 'select-all', 'unselect-all'],
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    value: {
      type: Array,
      default: () => []
    },
    multiCheckboxOptions: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    modelValue: {
      get() {
        return this.value;
      },
      set(newVal) {
        this.$emit('input', newVal);
      }
    }
  }
};
</script>
