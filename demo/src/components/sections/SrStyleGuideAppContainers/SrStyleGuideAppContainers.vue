<template>
  <v-flex id="sr-style-guide-app-containers">
    <v-flex class="sg-subsection">
      <v-flex xs12>
        <h2>Page</h2>
      </v-flex>
    <div class="sg-block mb-4">
      Use this component as the root element of your application if you are making a Shoprenter admin page.
    </div>
    <div class="code-container">
      <sr-code-block code='<sr-page>
  This is text on a page.
 </sr-page>
'/>
    </div>
      </v-flex>
    <v-flex class="sg-subsection">
      <v-flex xs12>
        <h2>Module</h2>
      </v-flex>
    <div class="sg-block mb-4">
      Use this component as the root element of your application if you are making a module to be embedded into pages.
    </div>
    <div class="code-container">
      <sr-code-block code='<sr-module>
  This is text in a module.
 </sr-module>
'/>
    </div>
    </v-flex>
  </v-flex>
</template>

<script>
import './StyleGuideAppContainers.scss'

export default {
    name: 'SrStyleAppContainers',
    inheritAttrs: false
}
</script>
