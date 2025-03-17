<template>
    <div class="admin-pagination">
        <v-row>
            <v-col :cols="6" sm="9" class="admin-pagination-pages">
                <v-pagination v-if="pageLength > 1"
                              data-test-id="adminPaginationPages"
                              :total-visible="9"
                              :value="value"
                              @input="updateValue"
                              :length="pageLength"/>
            </v-col>
            <v-col :cols="6" sm="3" class="admin-pagination-results" data-test-id="paginationPageInfo">
                {{pageInterval}} {{totalCount}} <span class="admin-pagination-results__label">{{translate('text_item')}}</span>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: {
        value: {
            type: Number
        },
        totalCount: {
            type: Number,
            required: true
        },
        itemsPerPage: {
            type: Number,
            required: true
        }
    },
    computed: {
        pageInterval () {
            if (!this.totalCount) {
                return ''
            }
            let last = this.value * this.itemsPerPage
            let first = last + 1 - this.itemsPerPage
            return `${first} - ${Math.min(last, this.totalCount)} /`
        },
        pageLength () {
            return this.totalCount
                ? Math.ceil(this.totalCount / this.itemsPerPage)
                : 0
        }
    },
    methods: {
        updateValue (newValue) {
            this.$emit('input', newValue)
        }
    }
}
</script>
