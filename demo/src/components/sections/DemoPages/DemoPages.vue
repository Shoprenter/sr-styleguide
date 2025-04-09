<template>
  <div>
    <v-flex id="listing-page" class="sg-subsection">
      <v-flex xs12>
        <h4 class="text-h4">Listing Page</h4>
      </v-flex>
      <sr-page>
        <sr-standard-layout>
          <sr-heading title="Demo Listing Page">
            <sr-delete-button>Delete</sr-delete-button>
            <sr-primary-button outlined class="ml-3">Cancel</sr-primary-button>
            <sr-primary-button class="ml-3">New</sr-primary-button>
          </sr-heading>
          <sr-simple-table>
            <thead>
            <tr>
              <th>
                <sr-checkbox></sr-checkbox>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Customer Group</th>
              <th>Status</th>
              <th>Created At</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr class="filter-row">
              <td></td>
              <td><sr-input-field :hide-details="true" :dense="true" type="text"></sr-input-field></td>
              <td><sr-input-field :hide-details="true" type="text"></sr-input-field></td>
              <td><sr-select :items="customerGroupOptions" placeholder="--- Kérlek válassz ---"/></td>
              <td><sr-select :items="statusOptions"/></td>
              <td><sr-date-picker v-model="date"/></td>
              <td><sr-primary-button>Filter</sr-primary-button></td>
            </tr>
            <tr v-for="(customer, index) in customers" :key="index">
              <td>
                <sr-checkbox v-model="customer.selected"></sr-checkbox>
              </td>
              <td>{{ customer.name }}</td>
              <td>{{ customer.email }}</td>
              <td>{{ customer.group }}</td>
              <td>{{ customer.status }}</td>
              <td>{{ customer.createdAt }}</td>
              <td><sr-pencil-icon color="green"></sr-pencil-icon></td>
            </tr>
            </tbody>
          </sr-simple-table>
          <sr-pagination :items-per-page="10" :total-count="30" v-model="currentPage"></sr-pagination>
        </sr-standard-layout>
      </sr-page>
    </v-flex>
  </div>
</template>

<script>

export default {
  name: 'DemoPages',
  data() {
    return {
      currentPage: 1,
      date: new Date().toISOString().substring(0, 10),
      customerGroupOptions:[
        { text: 'Retail', value: 1 },
        { text: 'VIP', value: 2 },
        { text: 'Wholesale', value: 3 }
      ],
      statusOptions: [
        { text: 'Active', value: 1 },
        { text: 'Inactive', value: 2 }
      ],
      customers: [
        {
          name: 'John Doe',
          email: 'john.doe@example.com',
          group: 'Retail',
          status: 'Active',
          createdAt: '2023-10-01',
          selected: false
        },
        {
          name: 'Jane Smith',
          email: 'jane.smith@example.com',
          group: 'Wholesale',
          status: 'Inactive',
          createdAt: '2023-10-02',
          selected: false
        },
        {
          name: 'Robert Johnson',
          email: 'robert.johnson@example.com',
          group: 'Retail',
          status: 'Active',
          createdAt: '2023-10-03',
          selected: false
        },
        {
          name: 'Emily Davis',
          email: 'emily.davis@example.com',
          group: 'VIP',
          status: 'Active',
          createdAt: '2023-10-04',
          selected: false
        },
        {
          name: 'Michael Brown',
          email: 'michael.brown@example.com',
          group: 'Retail',
          status: 'Inactive',
          createdAt: '2023-10-05',
          selected: false
        },
        {
          name: 'Linda Williams',
          email: 'linda.williams@example.com',
          group: 'Wholesale',
          status: 'Active',
          createdAt: '2023-10-06',
          selected: false
        },
        {
          name: 'William Jones',
          email: 'william.jones@example.com',
          group: 'VIP',
          status: 'Active',
          createdAt: '2023-10-07',
          selected: false
        },
        {
          name: 'Patricia Miller',
          email: 'patricia.miller@example.com',
          group: 'Retail',
          status: 'Inactive',
          createdAt: '2023-10-08',
          selected: false
        },
        {
          name: 'Charles Wilson',
          email: 'charles.wilson@example.com',
          group: 'Wholesale',
          status: 'Active',
          createdAt: '2023-10-09',
          selected: false
        },
        {
          name: 'Barbara Taylor',
          email: 'barbara.taylor@example.com',
          group: 'VIP',
          status: 'Inactive',
          createdAt: '2023-10-10',
          selected: false
        }
      ]
    }
  }
}
</script>

<style>
.filter-row td {
  text-align: center;
  vertical-align: middle;
}
</style>
