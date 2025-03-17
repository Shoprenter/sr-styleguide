<template>
    <div class="input-save">
        <input
            :type="type"
            class="input-save__input"
            :value="value"
            :step="step"
            @input="$emit('input', $event.target.value)"
            @blur="save"
            @focus="handleFocus"
            @keydown.enter.prevent="$event.target.blur()"
            @keydown.esc.prevent="cancel"
            :data-test-id="dataTestId"
            :data-test-value="value"
            :disabled="disabled"
            ref="input"
        >
        <span class="input-save__loading-container">
            <v-progress-circular
                v-if="isSaving"
                indeterminate
                :size=12
                width="2"
                color="primary"
            />
        </span>
    </div>
</template>

<script>
export default {
    name: 'InputSave',
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
        dataTestId: {
            default: 'input-save',
            required: false
        },
        step: {
            required: false,
            default: false
        },
        disabled: {
            required: false,
            type: Boolean
        }
    },
    methods: {
        save () {
            if (this.originalValue.toString() !== this.value.toString()) {
                this.$emit('save')
            }
        },
        cancel () {
            this.$emit('input', this.originalValue)
            this.$nextTick(() => {
                this.$refs.input.blur()
            })
        },
        handleFocus (event) {
            event.target.select()
        }
    }
}
</script>
