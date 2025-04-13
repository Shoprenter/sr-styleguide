<template>
  <v-menu
      v-model="menuOpen"
      offset-y
      max-width="290"
  >
    <template #activator="{on, attrs}">
      <v-text-field
          :value="value"
          :placeholder="placeholder"
          @change="$emit('input', $event)"
          clearable
          dense hide-details outlined
          append-icon="mdi-chevron-down"
          readonly
          v-bind="attrs"
          v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
        :value="value"
        @input="selectDate"
        clearable
        first-day-of-week="1"
    />
  </v-menu>
</template>

<script>
export default {
    name: 'SrDatePicker',
    props: {
        value: {
            required: false,
            default: null
        },
        placeholder: {
            required: false,
            default: ''
        },
        clearable: {
            required: false,
            default: false
        }
    },
    data () {
        return {
            menuOpen: false
        }
    },
    methods: {
        selectDate (value) {
            this.$emit('input', value)
            this.menuOpen = false
        }
    }
}
</script>
