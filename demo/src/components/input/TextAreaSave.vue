<template>
    <div class="textarea-save">
        <textarea
            class="textarea-save__textarea"
            :value="value"
            @input="$emit('input', $event.target.value)"
            @blur="save"
            @focus="handleFocus"
            @keydown.enter.prevent="$event.target.blur()"
            @keydown.esc.prevent="cancel"
            :disabled="disabled"
            ref="textArea"
            :data-test-id="dataTestId"
        />
    </div>
</template>

<script>
export default {
    name: 'TextAreaSave',
    props: {
        value: {
            required: false
        },
        originalValue: {
            required: true
        },
        isSaving: {
            type: Boolean,
            required: false
        },
        type: {
            type: String,
            required: false,
            default: () => 'text'
        },
        disabled: {
            type: Boolean,
            required: false
        },
        step: {
            required: false,
            default: false
        },
        dataTestId: {
            default: 'textarea-save',
            required: false
        }
    },
    methods: {
        save () {
            if (this.originalValue) {
                if (this.originalValue.toString() !== this.value.toString()) {
                    this.$emit('save')
                }
            }
        },
        cancel () {
            this.$emit('input', this.originalValue)
            this.$nextTick(() => {
                this.$refs.textArea.blur()
            })
        },
        handleFocus (event) {
            event.target.select()
        }
    }
}
</script>
