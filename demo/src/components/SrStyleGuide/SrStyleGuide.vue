<template>
  <sr-page class="admin-style-guide">
    <sr-standard-layout>
      <sr-heading title="SR Style Guide"/>

      <div class="admin-style-guide-layout">
        <div>
          <sr-style-guide-menu/>
        </div>
        <div>
          <v-flex class="pb-5">
            <p>Vuetify version: 2.6.14</p>
          </v-flex>
          <v-layout id="getting-started" class="sg-section" column wrap>
            <v-flex xs12>
              <h1 class="sg-section-header">Getting Started</h1>
            </v-flex>
          </v-layout>
          <v-layout id="demo-pages" class="sg-section" column wrap>
            <v-flex xs12>
              <h1 class="sg-section-header">Demo Pages</h1>
            </v-flex>
            <demo-pages/>
          </v-layout>
          <v-layout id="app-containers" class="sg-section" column wrap>
            <v-flex xs12>
              <h1 class="sg-section-header">App Containers</h1>
            </v-flex>
            <sr-style-guide-app-containers/>
          </v-layout>
          <v-layout id="layouts" class="sg-section" column wrap>
            <v-flex xs12>
              <h1 class="sg-section-header">Layouts</h1>
            </v-flex>
            <sr-style-guide-layouts/>
          </v-layout>
          <v-layout id="components" class="sg-section" column wrap>
            <v-flex xs12>
              <h1 class="sg-section-header">Components</h1>
            </v-flex>
            <v-flex id="alerts" class="sg-subsection" column wrap>
              <v-flex xs12>
                <h2>Alerts</h2>
              </v-flex>
              <sr-style-guide-alerts/>
            </v-flex>
            <v-flex id="buttons" class="sg-subsection" column wrap>
              <v-flex xs12>
                <h2>Buttons</h2>
              </v-flex>
              <sr-style-guide-buttons/>
            </v-flex>
            <v-flex id="form-row" class="sg-subsection" column wrap>
              <v-flex xs12>
                <h2>Form Row</h2>
              </v-flex>
              <sr-style-guide-form-row/>
            </v-flex>
            <v-flex id="icons" class="sg-subsection" column wrap>
              <v-flex xs12>
                <h2>Icons</h2>
              </v-flex>
              <sr-style-guide-icons/>
            </v-flex>
            <v-flex id="inputs" class="sg-subsection" column wrap>
              <v-flex xs12>
                <h2>Inputs</h2>
              </v-flex>
              <sr-style-guide-inputs/>
            </v-flex>
            <v-flex id="milestone-indicators" class="sg-subsection" column wrap>
              <v-flex xs12>
                <h2>Milestone Indicators</h2>
              </v-flex>
              <sr-style-guide-milestone-indicators/>
            </v-flex>
            <v-flex id="pagination" class="sg-subsection" column wrap>
              <v-flex xs12>
                <h2>Pagination</h2>
              </v-flex>
              <sr-style-guide-pagination/>
            </v-flex>
            <v-flex id="tables" class="sg-subsection" column wrap>
              <v-flex xs12>
                <h2>Tables</h2>
              </v-flex>
              <sr-style-guide-tables/>
            </v-flex>
            <v-flex id="tabs" class="sg-subsection" column wrap>
              <v-flex xs12>
                <h2>Tabs</h2>
              </v-flex>
              <sr-style-guide-tabs/>
            </v-flex>
          </v-layout>
        </div>
      </div>

    </sr-standard-layout>
  </sr-page>
</template>
<script>
import './SrStyleGuide.scss'

export default {
    name: 'StyleGuide'
}
</script>
