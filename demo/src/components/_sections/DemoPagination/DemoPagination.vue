<template>
  <div class="sg-subsection">
    <sr-pagination v-model="value" :items-per-page="itemsPerPage" :total-count="totalCount"/>
    <v-row>
      <v-col>
        <demo-code-block
            code='<sr-pagination
        :items-per-page="itemsPerPage"
        :total-count="totalCount"
        v-model="value" />'
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
    name: 'DemoPagination',
    data () {
        return {
            itemsPerPage: 10,
            totalCount: 45,
            value: 3
        }
    }
}
</script>
