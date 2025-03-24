<template>
  <sr-page-layout class="admin-style-guide">
    <sr-page-header :title="translate('help.style_guide')"></sr-page-header>

    <div class="admin-style-guide-layout">
      <div>
        <sr-style-guide-menu/>
      </div>
      <div>
        <v-flex class="pb-5">
          <p>Vuetify version: 2.6.14</p>
        </v-flex>
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
          <v-flex id="icons" class="sg-subsection" column wrap>
            <v-flex xs12>
              <h2>Icons</h2>
            </v-flex>
            <sr-style-guide-icons/>
          </v-flex>
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
