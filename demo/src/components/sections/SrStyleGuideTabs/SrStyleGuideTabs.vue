<template>
  <v-flex id="sr-style-guide-tabs">
    <v-flex class="sg-subsection">
      <div class="sg-block mb-4">
        <h4 class="text-h4">Tabs</h4>
        <div class="tabs-container">
          <!-- simpleTab: "s-tab-2" -->
          <sr-tabs v-model="simpleTab">
            <sr-tab :href="'#s-tab-1'">Tab 1</sr-tab>
            <sr-tab :href="'#s-tab-2'">Tab 2</sr-tab>
            <sr-tab :href="'#s-tab-3'">Tab 3</sr-tab>
          </sr-tabs>

          <sr-tabs-items v-model="simpleTab">
            <sr-tab-item :value="'s-tab-1'">
              <v-card flat>
                <v-card-text>Simple tab content 1</v-card-text>
              </v-card>
            </sr-tab-item>
            <sr-tab-item :value="'s-tab-2'">
              <v-card flat>
                <v-card-text>Simple tab content 2</v-card-text>
              </v-card>
            </sr-tab-item>
            <sr-tab-item :value="'s-tab-3'">
              <v-card flat>
                <v-card-text>Simple tab content 3</v-card-text>
              </v-card>
            </sr-tab-item>
          </sr-tabs-items>
        </div>
      </div>
      <sr-code-block :code='codeBlock1'/>
    </v-flex>

    <v-flex class="sg-subsection">
      <div class="sg-block mb-4">
        <h4 class="text-h4">Language Tabs</h4>
        <div class="tabs-container">
          <!-- languageTab: "tab-2" -->
          <sr-tabs v-model="languageTab">
            <sr-language-tab :href="'#tab-1'" lang="hu" />
            <sr-language-tab :href="'#tab-2'" lang="en" />
            <sr-language-tab :href="'#tab-3'" lang="de" />
            <sr-language-tab :href="'#tab-4'" lang="hr" />
          </sr-tabs>

          <sr-tabs-items v-model="languageTab">
            <sr-tab-item :value="'tab-1'">
              <v-card flat>
                <v-card-text><b>Hungarian</b> content</v-card-text>
              </v-card>
            </sr-tab-item>
            <sr-tab-item :value="'tab-2'">
              <v-card flat>
                <v-card-text><b>English</b> content</v-card-text>
              </v-card>
            </sr-tab-item>
            <sr-tab-item :value="'tab-3'">
              <v-card flat>
                <v-card-text><b>German</b> content</v-card-text>
              </v-card>
            </sr-tab-item>
            <sr-tab-item :value="'tab-4'">
              <v-card flat>
                <v-card-text><b>Croatian</b> content</v-card-text>
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

export default {
    name: 'SrStyleGuideTabs',
    inheritAttrs: false,
    data () {
        return {
            simpleTab: 's-tab-2',
            languageTab: 'tab-2',
            codeBlock1: `<!-- simpleTab: "s-tab-2" -->
<sr-tabs v-model="simpleTab">
  <sr-tab :href="'#s-tab-1'">Tab 1</sr-tab>
  <sr-tab :href="'#s-tab-2'">Tab 2</sr-tab>
  <sr-tab :href="'#s-tab-3'">Tab 3</sr-tab>
</sr-tabs>

<sr-tabs-items v-model="simpleTab">
  <sr-tab-item :value="'s-tab-1'">
    <v-card flat>
      <v-card-text>Simple tab content 1</v-card-text>
    </v-card>
  </sr-tab-item>
  <sr-tab-item :value="'s-tab-2'">
    <v-card flat>
      <v-card-text>Simple tab content 2</v-card-text>
    </v-card>
  </sr-tab-item>
  <sr-tab-item :value="'s-tab-3'">
    <v-card flat>
      <v-card-text>Simple tab content 3</v-card-text>
    </v-card>
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
