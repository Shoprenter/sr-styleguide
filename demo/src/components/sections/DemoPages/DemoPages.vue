<template>
  <div>
    <demo-list-page
        :customer-group-options="customerGroupOptions"
        :status-options="statusOptions"
    />

    <demo-form-page
        :customer-group-options="customerGroupOptions"
        :status-options="statusOptions"
    />
  </div>
</template>

<script>

export default {
    name: 'DemoPages',
    data () {
        return {
            customerGroupOptions: [
                { text: 'Retail', value: 1 },
                { text: 'VIP', value: 2 },
                { text: 'Wholesale', value: 3 }
            ],
            statusOptions: [
                { text: 'Active', value: 1 },
                { text: 'Inactive', value: 2 }
            ]
        }
    }
}
</script>

<style>

</style>
