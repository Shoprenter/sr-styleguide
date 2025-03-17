<template>
    <div class="action-bar-wrapper" v-if="!!selectedItems">
        <div class="items-selected-text">
            {{selectedItems}} {{translate('item_selected')}}
        </div>
        <div class="actions">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'BulkEditActionBar',
    props: {
        selectedItems: {
            type: Number,
            required: true,
            default: 0
        }
    }
}
</script>
