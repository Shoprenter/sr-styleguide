<template>
  <sr-page class="admin-style-guide">
    <sr-standard-layout>
      <sr-heading title="SR Style Guide"/>

      <div class="admin-style-guide-layout">
        <div>
          <sr-style-guide-menu/>
        </div>
        <div>

          <v-layout id="getting-started" class="sg-section" column wrap>
            <v-flex xs12>
              <h1 class="sg-section-header">Getting Started</h1>
            </v-flex>
            <v-flex id="introduction" class="sg-subsection">
              <v-flex xs12>
              <h2>Introduction</h2>
              </v-flex>
              <p>A shared component and style library for Shoprenter admin applications.</p>
              <p>This package provides a preconfigured Vuetify instance and a set of reusable Vuetify 2 components designed to ensure a consistent look and feel across all remote applications built for the Shoprenter admin interface.</p>
            </v-flex>
            <v-flex id="features" class="sg-subsection">
              <v-flex xs12>
                <h2>Features</h2>
              </v-flex>
              <ul>
                <li>Preconfigured Vuetify 2.6.14 setup</li>
                <li>Vue 2 compatible</li>
                <li>Ready-to-use design components</li>
                <li>Custom SCSS/CSS design system</li>
                <li>Easy integration with remote applications</li>
                <li>Supports full-page apps and embeddable modules</li>
              </ul>
            </v-flex>
            <v-flex id="requirements" class="sg-subsection">
              <v-flex xs12>
                <h2>Requirements</h2>
              </v-flex>
              <ul>
                <li>Node.js 14.x (22.x for development)</li>
                <li>npm 10.x</li>
                <li>Vue 2.x</li>
                <li>Vuetify 2.6.14 (bundled with the package)</li>
              </ul>
            </v-flex>
            <v-flex id="installation" class="sg-subsection">
              <v-flex xs12>
                <h2>Installation</h2>
              </v-flex>
              <p>Install the styleguide package via npm:</p>
              <sr-code-block language="Bash" code="npm install @shoprenter/sr-styleguide" />
            </v-flex>
            <v-flex id="usage" class="sg-subsection">
              <v-flex xs12>
                <h2>Usage</h2>
              </v-flex>
              <p>To use the styleguide components and styles in your Vue application:</p>
              <ul>
                <li>Import the component library and register it:</li>
                <sr-code-block class="pb-3" language="JavaScript" width="65%" code="import Vue from 'vue'
   import { SrStyleguideComponents } from '@shoprenter/sr-styleguide'

   Vue.use(SrStyleguideComponents)" />
                <li>Initialize your Vue app with the preconfigured Vuetify instance</li>
                <sr-code-block class="pb-3" language="JavaScript" width="65%" code="import Vue from 'vue'
   import { SrStyleguide } from '@shoprenter/sr-styleguide'
   import App from './App.vue'

   new Vue({
      vuetify: SrStyleguide,
      render: h => h(App)
   }).$mount('#app')" />
                <li>Load the styleguide stylesheet</li>
                <sr-code-block language="JavaScript" width="65%" code="import '@shoprenter/sr-styleguide/dist/stylesheet/sr-styleguide.css'" />
              </ul>

            </v-flex>
            <v-flex id="example" class="sg-subsection">
              <v-flex xs12>
                <h2>Example: App Integration</h2>
              </v-flex>
              <p>Here is a simple example of how to use the styleguide in your Vue application:</p>
              <sr-code-block language="JavaScript" width="65%" code="import Vue from 'vue'
   import { SrStyleguide, SrStyleguideComponents } from '@shoprenter/sr-styleguide'
   import App from './App.vue'

   import '@shoprenter/sr-styleguide/dist/stylesheet/sr-styleguide.css'

   Vue.use(SrStyleguideComponents)

   export default function createApp() {
      return new Vue({
        vuetify: SrStyleguide,
        render: h => h(App)
      })
   }" />
            </v-flex>
            <v-flex id="changelog" class="sg-subsection">
              <v-flex xs12>
                <h2>Changelog</h2>
              </v-flex>

            See <a target="_blank" href="https://github.com/Shoprenter/sr-styleguide/blob/master/CHANGELOG.md">CHANGELOG.md</a> for the list of updates and changes.
            </v-flex>
            <v-flex id="contribution" class="sg-subsection">
              <v-flex xs12>
                <h2>Contribution</h2>
              </v-flex>
            This package is maintained by the Shoprenter team.
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
