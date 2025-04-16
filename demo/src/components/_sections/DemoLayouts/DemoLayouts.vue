<template>
    <div id="sr-style-guide-layouts">
        <v-flex id="slim-layout" class="sg-subsection">
            <v-flex xs12>
                <h2>Slim layout</h2>
            </v-flex>
            <sr-slim-layout>
              <sr-slim-heading :title="'Page title'">
                <sr-primary-button outlined>Cancel</sr-primary-button>
                <sr-primary-button class="ml-3">Save</sr-primary-button>
              </sr-slim-heading>
              <sr-slim-content>
                Admin example slim content
              </sr-slim-content>
            </sr-slim-layout>
          <demo-code-block code='<sr-slim-layout>
          <sr-slim-heading :title="&#39;Page title&#39;">
              <sr-primary-button outlined>Cancel</sr-primary-button>
              <sr-primary-button class="ml-3">Save</sr-primary-button>
          </sr-slim-heading>
          <sr-slim-content>
            Admin example slim content
          </sr-slim-content>
    </sr-slim-layout>' />
        </v-flex>
      <v-flex id="standard-layout" class="sg-subsection">
        <v-flex xs12>
          <h2>Standard layout</h2>
        </v-flex>
        <sr-standard-layout>
          <sr-heading :title="'Page title'">
            <sr-primary-button outlined>Cancel</sr-primary-button>
            <sr-primary-button class="ml-3">Save</sr-primary-button>
          </sr-heading>
          <sr-content>
            Admin example standard content
          </sr-content>
        </sr-standard-layout>
        <v-row>
        <demo-code-block code='<sr-standard-layout>
          <sr-heading :title="Page title">
        <sr-primary-button outlined>Cancel</sr-primary-button>
        <sr-primary-button class="ml-3">Save</sr-primary-button>
        </sr-heading>
        <sr-content>
          Admin example standard content
        </sr-content>
    </sr-standard-layout>' />
        </v-row>
      </v-flex>
    </div>
</template>

<script>
import './DemoLayouts.scss'

export default {
    name: 'StyleGuideLayout'
}
</script>
