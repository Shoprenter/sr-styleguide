<template>
  <v-checkbox
      class="mb-2 mt-2"
      :input-value="modelValue"
      :ripple="false"
      :value="checkboxValue"
      hide-details
      v-bind="$attrs"
      @change="handleChange"
  ></v-checkbox>
</template>

<script>
export default {
    name: 'SrArrayCheckbox',
    inheritAttrs: false,
    emits: ['change:modelValue'],
    props: {
        modelValue: {
            type: Array,
            default: () => []
        },
        checkboxValue: {
            type: [Number, String],
            default: 0
        }
    },
    methods: {
        handleChange (checked) {
            this.$emit('change:modelValue', checked)
        }
    }
}
</script>
