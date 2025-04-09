<template>
  <div class="admin-pagination">
    <v-row>
      <v-col :cols="6" sm="9" class="admin-pagination-pages">
        <v-pagination v-if="pageLength > 1"
                      :total-visible="9"
                      :value="value"
                      @input="updateValue"
                      next-icon="mdi-chevron-right"
                      prev-icon="mdi-chevron-left"
                      :length="pageLength"/>
      </v-col>
      <v-col :cols="6" sm="3" class="admin-pagination-results">
        {{pageInterval}} {{totalCount}}
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
    name: 'SrPagination',
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
            const last = this.value * this.itemsPerPage
            const first = last + 1 - this.itemsPerPage
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
