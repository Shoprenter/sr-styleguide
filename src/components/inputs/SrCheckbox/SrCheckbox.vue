<template>
  <v-checkbox
      :input-value="value"
      @change="$emit('input', $event)"
      v-bind="$attrs"
      v-on="$listeners"
      hide-details
      :ripple="false"
  ></v-checkbox>
</template>

<script>
export default {
    name: 'SrCheckbox',
    inheritAttrs: false,
    model: {
        prop: 'value',
        event: 'input'
    },
    props: {
        value: {
            type: [Boolean, Number],
            required: false
        }
    }
}
</script>
