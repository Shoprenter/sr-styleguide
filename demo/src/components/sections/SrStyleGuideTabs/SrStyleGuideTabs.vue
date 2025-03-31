<template>
  <v-flex id="sr-style-guide-tabs">
    <v-flex class="sg-subsection">
      <div class="sg-block mb-4">
        <div class="tabs-container">
          <!-- model: "tab-2" -->
          <sr-tabs v-model="model">
            <sr-tab :href="'#tab-1'">Tab 1</sr-tab>
            <sr-tab :href="'#tab-2'">Tab 2</sr-tab>
            <sr-tab :href="'#tab-3'">Tab 3</sr-tab>
          </sr-tabs>

          <sr-tabs-items v-model="model">
            <sr-tab-item :value="'tab-1'">
              <v-card flat>
                <v-card-text>Tab 1 content</v-card-text>
              </v-card>
            </sr-tab-item>
            <sr-tab-item :value="'tab-2'">
              <v-card flat>
                <v-card-text>Tab 2 content</v-card-text>
              </v-card>
            </sr-tab-item>
            <sr-tab-item :value="'tab-3'">
              <v-card flat>
                <v-card-text>Tab 3 content</v-card-text>
              </v-card>
            </sr-tab-item>
          </sr-tabs-items>
        </div>
      </div>
      <sr-code-block :code='codeBlock1'/>
    </v-flex>
  </v-flex>
</template>

<script>
import './SrStyleGuideTabs.scss'

export default {
    name: 'SrStyleGuideTabs',
    inheritAttrs: false,
    data () {
        return {
            model: 'tab-2',
            codeBlock1: `<!-- model: "tab-2" -->
<sr-tabs v-model="model">
  <sr-tab :href="'#tab-1'">Tab 1</sr-tab>
  <sr-tab :href="'#tab-2'">Tab 2</sr-tab>
  <sr-tab :href="'#tab-3'">Tab 3</sr-tab>
</sr-tabs>

<sr-tabs-items v-model="model">
  <sr-tab-item :value="'tab-1'">
    <v-card flat><v-card-text>Tab 1 content</v-card-text></v-card>
  </sr-tab-item>
  <sr-tab-item :value="'tab-2'">
    <v-card flat><v-card-text>Tab 2 content</v-card-text></v-card>
  </sr-tab-item>
  <sr-tab-item :value="'tab-3'">
    <v-card flat><v-card-text>Tab 3 content</v-card-text></v-card>
  </sr-tab-item>
</sr-tabs-items>`,
            codeBlock2: `data () {
    return {
        model: 'tab-2'
    }
}`
        }
    }

}
</script>
