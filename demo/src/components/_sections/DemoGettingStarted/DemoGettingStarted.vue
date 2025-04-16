<template>
<div>
  <v-flex id="introduction" class="sg-subsection">
    <v-flex xs12>
      <h2>Introduction</h2>
    </v-flex>
    <p>This package is a UI component library for the Shoprenter admin interface.</p>
    <p>It provides a pre-configured Vuetify 2 instance and reusable Vuetify-based components designed to ensure a consistent look and feel across the Shoprenter admin interface.</p>
  </v-flex>
  <v-flex id="features" class="sg-subsection">
    <v-flex xs12>
      <h2>Features</h2>
    </v-flex>
    <ul>
      <li>Pre-configured Vuetify 2.6.14 setup</li>
      <li>Vue 2 compatible</li>
      <li>Ready-to-use design components</li>
      <li>Custom SCSS/CSS design</li>
      <li>Easy integration with remote applications</li>
      <li>Supports full-page apps and embeddable modules</li>
    </ul>
  </v-flex>
  <v-flex id="requirements" class="sg-subsection">
    <v-flex xs12>
      <h2>Requirements</h2>
    </v-flex>
    <ul>
      <li>Node.js 14.x (22.x for developing the styleguide itself)</li>
      <li>npm 10.x</li>
      <li>Vue 2.x</li>
      <li>Vuetify 2.6.14 (comes bundled with the package)</li>
    </ul>
  </v-flex>
  <v-flex id="installation" class="sg-subsection">
    <v-flex xs12>
      <h2>Installation</h2>
    </v-flex>
    <p>Install the styleguide package via npm:</p>
    <demo-code-block class="pb-3" language="Bash" code="npm install @shoprenter/sr-styleguide" />
    <p>You can find the package on npm: <a target="_blank" href="https://www.npmjs.com/package/@shoprenter/sr-styleguide">@shoprenter/sr-styleguide</a></p>
  </v-flex>
  <v-flex id="usage" class="sg-subsection">
    <v-flex xs12>
      <h2>Usage</h2>
    </v-flex>
    <p>To use the styleguide components and styles in your Vue application:</p>
    <ul>
      <li>Import the component library and register it:</li>
      <demo-code-block class="pb-3" language="JavaScript" width="75%" code="import Vue from 'vue'
 import { DemoComponents } from '@shoprenter/sr-styleguide'

 Vue.use(DemoComponents)" />
      <li>Initialize your Vue app with the pre-configured Vuetify instance</li>
      <demo-code-block class="pb-3" language="JavaScript" width="75%" code="import Vue from 'vue'
 import { Demo } from '@shoprenter/sr-styleguide'
 import App from './App.vue'

 new Vue({
    vuetify: Demo,
    render: h => h(App)
 }).$mount('#app')" />
      <li>Load the styleguide stylesheet</li>
      <demo-code-block language="JavaScript" width="75%" code="import '@shoprenter/sr-styleguide/dist/stylesheet/sr-styleguide.css'" />
    </ul>

  </v-flex>
  <v-flex id="example" class="sg-subsection">
    <v-flex xs12>
      <h2>Example: App Integration</h2>
    </v-flex>
    <p>Here is a simple example of how to use the styleguide in your Vue application:</p>
    <demo-code-block language="JavaScript" width="75%" code="import Vue from 'vue'
 import { Demo, DemoComponents } from '@shoprenter/sr-styleguide'
 import App from './App.vue'

 import '@shoprenter/sr-styleguide/dist/stylesheet/sr-styleguide.css'

 Vue.use(DemoComponents)

 export default function createApp() {
    return new Vue({
      vuetify: Demo,
      render: h => h(App)
    })
 }" />
  </v-flex>
  <v-flex id="changelog" class="sg-subsection">
    <v-flex xs12>
      <h2>Changelog</h2>
    </v-flex>
    You can find the changelog in the <a target="_blank" href="https://www.npmjs.com/package/@shoprenter/sr-styleguide#changelog">README</a> of our npm package.
  </v-flex>
  <v-flex id="contribution" class="sg-subsection">
    <v-flex xs12>
      <h2>Contribution</h2>
    </v-flex>
    This package is maintained by the Shoprenter team.
  </v-flex>
</div>
</template>

<script>
export default {
    name: 'DemoGettingStarted'
}
</script>
