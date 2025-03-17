<template>
    <div class="d-flex justify-space-between align-center select-save">
        <select class="select-save__select" :data-test-id="dataTestId" @change="changeValue" :value="value">
            <option v-for="(item, key, index) in items"
                    :key="index"
                    :value="item.value"
                    class="select-save__option"
                    :class="item.class"
                    :data-test-id="isSelected(item.value) ? 'active' : false"
                    :style="{color: item.color || false}"
            >
                {{item.text}}
            </option>
        </select>
        <span class="select-arrow">
            <v-icon right>mdi-chevron-down</v-icon>
        </span>
        <span class="select-save__loading-container">
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
    name: 'SelectSave',
    props: ['dataTestId', 'originalValue', 'value', 'items', 'isSaving'],
    methods: {
        isSelected (val) {
            return val.toString() === this.value.toString()
        },
        changeValue (e) {
            const val = e.target.value
            this.$emit('input', val)
            this.$emit('save')
        }
    }
}
</script>
