<template>
  <v-tabs
      v-bind="$attrs"
      v-on="$listeners"
      class="sr-tabs"
      color="var(--sr-black)"
      slider-color="var(--sr-black)"
      background-color="transparent"
      :value="value"
      @change="updateValue"
  >
    <slot/>
  </v-tabs>
</template>

<script>
import './SrTabs.scss'

export default {
    name: 'SrTabs',
    props: {
        value: String
    },
    methods: {
        updateValue (newValue) {
            this.$emit('input', newValue)
        }
    }
}
</script>
