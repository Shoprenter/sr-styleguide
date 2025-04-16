<template>
  <sr-page class="admin-style-guide">
    <sr-standard-layout>
      <sr-heading title="SR Style Guide"/>

      <div class="admin-style-guide-layout">
        <div>
          <demo-menu/>
        </div>
        <div>

          <v-layout id="getting-started" class="sg-section" column wrap>
            <v-flex xs12>
              <h1 class="sg-section-header">Getting Started</h1>
            </v-flex>
            <demo-getting-started/>
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
            <demo-app-containers/>
          </v-layout>
          <v-layout id="layouts" class="sg-section" column wrap>
            <v-flex xs12>
              <h1 class="sg-section-header">Layouts</h1>
            </v-flex>
            <demo-layouts/>
          </v-layout>
          <v-layout id="components" class="sg-section" column wrap>
            <v-flex xs12>
              <h1 class="sg-section-header">Components</h1>
            </v-flex>
            <v-flex id="alerts" class="sg-subsection" column wrap>
              <v-flex xs12>
                <h2>Alerts</h2>
              </v-flex>
              <demo-alerts/>
            </v-flex>
            <v-flex id="buttons" class="sg-subsection" column wrap>
              <v-flex xs12>
                <h2>Buttons</h2>
              </v-flex>
              <demo-buttons/>
            </v-flex>
            <v-flex id="form-row" class="sg-subsection" column wrap>
              <v-flex xs12>
                <h2>Form Row</h2>
              </v-flex>
              <demo-form-row/>
            </v-flex>
            <v-flex id="icons" class="sg-subsection" column wrap>
              <v-flex xs12>
                <h2>Icons</h2>
              </v-flex>
              <demo-icons/>
            </v-flex>
            <v-flex id="inputs" class="sg-subsection" column wrap>
              <v-flex xs12>
                <h2>Inputs</h2>
              </v-flex>
              <demo-inputs/>
            </v-flex>
            <v-flex id="milestone-indicators" class="sg-subsection" column wrap>
              <v-flex xs12>
                <h2>Milestone Indicators</h2>
              </v-flex>
              <demo-milestone-indicators/>
            </v-flex>
            <v-flex id="pagination" class="sg-subsection" column wrap>
              <v-flex xs12>
                <h2>Pagination</h2>
              </v-flex>
              <demo-pagination/>
            </v-flex>
            <v-flex id="tables" class="sg-subsection" column wrap>
              <v-flex xs12>
                <h2>Tables</h2>
              </v-flex>
              <demo-tables/>
            </v-flex>
            <v-flex id="tabs" class="sg-subsection" column wrap>
              <v-flex xs12>
                <h2>Tabs</h2>
              </v-flex>
              <demo-tabs/>
            </v-flex>
          </v-layout>
        </div>
      </div>

    </sr-standard-layout>
  </sr-page>
</template>
<script>
import './DemoApp.scss'

export default {
    name: 'DemoApp'
}
</script>
