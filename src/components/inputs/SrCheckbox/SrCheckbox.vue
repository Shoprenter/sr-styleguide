<template>
  <v-checkbox
      :input-value="value"
      @input="$emit('input', $event)"
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
            required: false
        }
    }
}
</script>
