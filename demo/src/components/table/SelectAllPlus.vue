<template>
    <block dense class="select-all-plus mb-2">
        <div class="text-center font-weight-medium">
            <span
                v-if="value"
                class="select-all-plus__selected"
                data-test-id="selectAllPlusSelected"
            >
                {{ translate('table.select_all_plus.selected', {number: allNumber}) }}
            </span>
            <a
                class="select-all-plus__button"
                v-else
                @click="selectAll"
                data-test-id="selectAllPlusButton"
            >
                {{ translate('table.select_all_plus.text', {number: difference}) }}
            </a>
        </div>
    </block>
</template>

<script>
export default {
    name: 'SelectAllPlus',
    props: {
        value: {
            type: Boolean,
            required: true
        },
        allNumber: {
            required: true
        },
        listedNumber: {
            required: true
        }
    },
    methods: {
        selectAll () {
            this.$emit('input', true)
        }
    },
    computed: {
        difference () {
            return (+this.allNumber) - (+this.listedNumber)
        }
    }
}
</script>
