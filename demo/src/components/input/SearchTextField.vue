<template>
    <v-text-field :value="value"
                  @input="emit"
                  ref="searchTextField"
                  outlined
                  :placeholder="placeholder"
                  hide-details
                  dense
                  :label="label"
                  :append-icon="keywordAppendIcon"
                  clearable
                  @keydown.esc.stop="clearKeyword"
                  @click:clear="clearKeyword"
                  :data-test-id="dataTestId"
    />
</template>

<script>
export default {
    name: 'SearchTextField',
    props: {
        value: {
            required: true
        },
        placeholder: {
            required: false
        },
        label: {
            required: false
        },
        dataTestId: {
            default: 'searchTextField'
        }
    },
    computed: {
        keywordAppendIcon () {
            return this.value ? '' : '$magnify'
        }
    },
    methods: {
        emit (value) {
            this.$emit('input', value)
        },
        clearKeyword () {
            this.emit('')
            this.$refs.searchTextField.blur()
        }
    }
}
</script>
