<template>
  <v-flex id="list-page" class="sg-subsection">
    <v-flex xs12>
      <h4 class="text-h4">List Page</h4>
    </v-flex>
    <sr-page>
      <sr-standard-layout>
        <sr-heading title="Demo List Page">
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
          <tr>
            <sr-simple-table-filter-td></sr-simple-table-filter-td>
            <sr-simple-table-filter-td min-width="150px">
              <sr-input-field :hide-details="true" type="text"></sr-input-field>
            </sr-simple-table-filter-td>
            <sr-simple-table-filter-td>
              <sr-input-field :hide-details="true" type="text"></sr-input-field>
            </sr-simple-table-filter-td>
            <sr-simple-table-filter-td min-width="160px">
              <sr-select :items="customerGroupOptions"/>
            </sr-simple-table-filter-td>
            <sr-simple-table-filter-td min-width="160px">
              <sr-select :items="statusOptions"/>
            </sr-simple-table-filter-td>
            <sr-simple-table-filter-td min-width="140px">
              <sr-date-picker v-model="date"/>
            </sr-simple-table-filter-td>
            <sr-simple-table-filter-td>
              <sr-primary-button>Filter</sr-primary-button>
            </sr-simple-table-filter-td>
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
            <td><sr-edit-icon color="var(--sr-primary)" @click="editCustomer"></sr-edit-icon></td>
          </tr>
          </tbody>
        </sr-simple-table>
        <sr-pagination :items-per-page="10" :total-count="30" v-model="currentPage"></sr-pagination>
      </sr-standard-layout>
    </sr-page>
    <v-row>
      <v-col cols="6">
        <sr-code-block :code="demoListPageCode"/>
      </v-col>
      <v-col cols="6">
        <sr-code-block language="JavaScript" code="data () {
  return {
      currentPage: 1,
      date: new Date().toISOString().substring(0, 10),
      customerGroupOptions: [
          { text: 'Retail', value: 1 },
          { text: 'VIP', value: 2 },
          { text: 'Wholesale', value: 3 }
      ],
      statusOptions: [
          { text: 'Active', value: 1 },
          { text: 'Inactive', value: 2 }
      ],
      customers: [
          { name: 'John Doe', email: 'john.doe@example.com', group: 'Retail', status: 'Active', createdAt: '2023-10-01', selected: false }
      ]
  }
}" width="100%"/>
      </v-col>
    </v-row>
  </v-flex>
</template>

<script>
export default {
    name: 'DemoListPage',
    props: [
        'customerGroupOptions',
        'statusOptions'
    ],
    data () {
        return {
            currentPage: 1,
            date: new Date().toISOString().substring(0, 10),
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
            ],
            demoListPageCode:
              '<sr-page>\n' +
              '  <sr-standard-layout>\n' +
              '    <sr-heading title="Demo List Page">\n' +
              '       <sr-delete-button>Delete</sr-delete-button>\n' +
              '       <sr-primary-button outlined class="ml-3">Cancel</sr-primary-button>\n' +
              '       <sr-primary-button class="ml-3">New</sr-primary-button>\n' +
              '    </sr-heading>\n' +
              '    <sr-simple-table>\n' +
              '    <thead>\n' +
              '     <tr>\n' +
              '       <th>\n' +
              '         <sr-checkbox></sr-checkbox>\n' +
              '       </th>\n' +
              '       <th>Name</th>\n' +
              '       <th>Email</th>\n' +
              '       <th>Customer Group</th>\n' +
              '       <th>Status</th>\n' +
              '       <th>Created At</th>\n' +
              '       <th></th>\n' +
              '     </tr>\n' +
              '    </thead>\n' +
              '    <tbody>\n' +
              '    <tr>\n' +
              '      <sr-simple-table-filter-td></sr-simple-table-filter-td>\n' +
              '      <sr-simple-table-filter-td min-width="150px"><sr-input-field :hide-details="true" type="text"></sr-input-field></sr-simple-table-filter-td>\n' +
              '      <sr-simple-table-filter-td><sr-input-field :hide-details="true" type="text"></sr-input-field></sr-simple-table-filter-td>\n' +
              '      <sr-simple-table-filter-td min-width="160px"><sr-select :items="customerGroupOptions"/></sr-simple-table-filter-td>\n' +
              '      <sr-simple-table-filter-td min-width="160px"><sr-select :items="statusOptions"/></sr-simple-table-filter-td>\n' +
              '      <sr-simple-table-filter-td min-width="140px"><sr-date-picker v-model="date"/></sr-simple-table-filter-td>\n' +
              '      <sr-simple-table-filter-td><sr-primary-button>Filter</sr-primary-button></sr-simple-table-filter-td>\n' +
              '    </tr>\n' +
              '    <tr v-for="(customer, index) in customers" :key="index">\n' +
              '      <td>\n' +
              '        <sr-checkbox v-model="customer.selected"></sr-checkbox>\n' +
              '      </td>\n' +
              '      <td>{{ customer.name }}</td>\n' +
              '      <td>{{ customer.email }}</td>\n' +
              '      <td>{{ customer.group }}</td>\n' +
              '      <td>{{ customer.status }}</td>\n' +
              '      <td>{{ customer.createdAt }}</td>\n' +
              '      <td><sr-edit-icon color="var(--sr-primary)" @click="editCustomer"></sr-edit-icon></td>\n' +
              '    </tr>\n' +
              '    </tbody>\n' +
              '    </sr-simple-table>\n' +
              '       <sr-pagination :items-per-page="10" :total-count="30" v-model="currentPage"></sr-pagination>\n' +
              '  </sr-standard-layout>\n' +
              '</sr-page>\''
        }
    },
    methods: {
        editCustomer (customer) {
            // Handle the edit action here
            console.log('Edit customer:', customer)
        }
    }
}
</script>
