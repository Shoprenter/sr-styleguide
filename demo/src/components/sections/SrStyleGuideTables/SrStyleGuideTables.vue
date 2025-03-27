<template>
  <div>
    <v-flex class="sg-subsection">
      <v-flex xs12>
        <h4 class="text-h4">Simple Table</h4>
      </v-flex>
      <v-row>
        <sr-simple-table>
          <thead>
          <tr>
            <th>Lorem</th>
            <th>Ipsum</th>
            <th>Dolor</th>
            <th>Sit</th>
            <th>Amet</th>
            <th>Consectetur</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Lorem ipsum</td>
            <td>Dolor sit amet</td>
            <td>Consectetur adipiscing</td>
            <td>Elit sed do</td>
            <td>Eiusmod tempor</td>
            <td>Incididunt ut labore</td>
          </tr>
          <tr>
            <td>Et dolore magna</td>
            <td>Aliqua ut enim</td>
            <td>Ad minim veniam</td>
            <td>Quis nostrud</td>
            <td>Exercitation ullamco</td>
            <td>Laboris nisi ut</td>
          </tr>
          <tr>
            <td>Aliquip ex ea</td>
            <td>Commodo consequat</td>
            <td>Duis aute irure</td>
            <td>Dolor in reprehenderit</td>
            <td>In voluptate velit</td>
            <td>Esse cillum dolore</td>
          </tr>
          </tbody>
        </sr-simple-table>
      </v-row>
      <v-row>
        <sr-code-block code='<sr-simple-table>
    <thead>
      <tr>
        <th>Lorem</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem ipsum</td>
      </tr>
    </tbody>
  </sr-simple-table>'/>
      </v-row>
    </v-flex>
  </div>
</template>

<script>

export default {
    name: 'SrStyleGuideTables'
}
</script>
