<template>
    <div>
        <v-flex class="sg-subsection">
            <v-flex xs12>
                <h2>Slim layout</h2>
            </v-flex>
            <sr-slim-layout>
              <sr-slim-heading :title="'Page title'">
                <v-btn outlined color="primary">Cancel</v-btn>
                <v-btn class="ml-3" color="primary">Save</v-btn>
              </sr-slim-heading>
              <sr-slim-content>
                <h3>Admin page content</h3>
              </sr-slim-content>
            </sr-slim-layout>
        </v-flex>
    </div>
</template>

<script>

export default {
    name: 'StyleGuideLayout'
}
</script>
