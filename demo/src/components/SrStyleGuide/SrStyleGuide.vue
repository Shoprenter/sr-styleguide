<template>
  <sr-page-layout class="admin-style-guide">
    <sr-page-header title="SR Style Guide"></sr-page-header>

    <div class="admin-style-guide-layout">
      <div>
        <sr-style-guide-menu/>
      </div>
      <div>
        <v-flex class="pb-5">
          <p>Vuetify version: 2.6.14</p>
        </v-flex>
        <v-layout class="sg-section" id="layouts" column wrap>
          <v-flex xs12>
            <h1 class="sg-section-header">Layouts</h1>
          </v-flex>
          <sr-style-guide-layouts />
        </v-layout>
        <v-layout id="components" class="sg-section" column wrap>
          <v-flex xs12>
            <h1 class="sg-section-header">Components</h1>
          </v-flex>
          <v-flex id="buttons" class="sg-subsection" column wrap>
            <v-flex xs12>
              <h2>Buttons</h2>
            </v-flex>
            <sr-style-guide-buttons/>
          </v-flex>
          <v-flex id="inputs" class="sg-subsection" column wrap>
            <v-flex xs12>
              <h2>Inputs</h2>
            </v-flex>
            <sr-style-guide-inputs/>
          </v-flex>
          <v-flex id="form-row" class="sg-subsection" column wrap>
            <v-flex xs12>
              <h2>Form Row</h2>
            </v-flex>
            <sr-style-guide-form-row/>
          </v-flex>
          <v-flex id="tables" class="sg-subsection" column wrap>
            <v-flex xs12>
              <h2>Tables</h2>
            </v-flex>
            <sr-style-guide-tables/>
          </v-flex>
          <v-flex id="pagination" class="sg-subsection" column wrap>
            <v-flex xs12>
              <h2>Pagination</h2>
            </v-flex>
            <sr-style-guide-pagination/>
          </v-flex>
          <v-flex id="alerts" class="sg-subsection" column wrap>
            <v-flex xs12>
              <h2>Alerts</h2>
            </v-flex>
            <sr-style-guide-alerts/>
          </v-flex>
          <v-flex id="icons" class="sg-subsection" column wrap>
            <v-flex xs12>
              <h2>Icons</h2>
            </v-flex>
            <sr-style-guide-icons/>
          </v-flex>
        </v-layout>
        <v-layout class="sg-section" id="app-containers" column wrap>
          <v-flex xs12>
            <h1 class="sg-section-header">App Containers</h1>
          </v-flex>
          <sr-style-guide-app-containers />
        </v-layout>
      </div>
    </div>
  </sr-page-layout>
</template>
<script>
import './SrStyleGuide.scss'

export default {
    name: 'StyleGuide'
}
</script>
