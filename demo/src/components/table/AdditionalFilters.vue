<template>
    <div>
        <v-btn color="primary" outlined class="admin-additional-filters-btn"
               @click="open"
               data-test-id="additionalFilters"
        >
            {{translate('more_filters')}}
            <template v-if="activeFilters">{{activeFilters}}</template>
        </v-btn>
        <sr-dialog
            max-width="500"
            v-model="dialogOpen"
        >
            <slot></slot>
            <template #actions>
                <v-btn outlined color="primary" @click="cancel" data-test-id="additionalFilterCancel">
                    {{translate('cancel')}}
                </v-btn>
                <v-spacer/>
                <v-btn
                    color="primary"
                    @click="close"
                    data-test-id="additionalFiltersResults"
                >
                    {{translate('filter_results')}}
                </v-btn>
            </template>
        </sr-dialog>
    </div>
</template>

<script>
export default {
    name: 'AdditionalFilters',
    props: {
        filters: {
            type: Array,
            required: true
        }
    },
    data () {
        return {
            dialogOpen: false
        }
    },
    computed: {
        activeFilters () {
            let count = 0
            for (let filter of this.filters) {
                if (
                    filter === '' ||
                    filter === null ||
                    (Array.isArray(filter) && !filter.length)
                ) {
                    continue
                }
                count++
            }
            return count
        }
    },
    methods: {
        open () {
            this.dialogOpen = true
        },
        close () {
            this.dialogOpen = false
        },
        cancel () {
            this.$emit('cancel')
            this.close()
        }
    }
}
</script>
