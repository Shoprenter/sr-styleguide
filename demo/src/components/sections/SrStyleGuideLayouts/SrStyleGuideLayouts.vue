<template>
    <div>
        <v-flex class="sg-subsection">
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
          <sr-code-block code='<sr-slim-layout>
              <sr-slim-heading :title="&apos;Page title&apos;">
          <sr-primary-button outlined>Cancel</sr-primary-button>
          <sr-primary-button class="ml-3">Save</sr-primary-button>
          </sr-slim-heading>
          <sr-slim-content>
            Admin example slim content
          </sr-slim-content>
          </sr-slim-layout>' />
        </v-flex>
    </div>
</template>

<script>

export default {
    name: 'StyleGuideLayout'
}
</script>
