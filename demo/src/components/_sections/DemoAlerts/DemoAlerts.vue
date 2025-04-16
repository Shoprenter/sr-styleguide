<template>
  <div>
    <v-flex class="sg-subsection">
      <v-flex xs12>
        <h4 class="text-h4">Success Alert</h4>
      </v-flex>
      <v-row>
        <v-col>
          <sr-success-alert>
            This is a success alert.
          </sr-success-alert>
        </v-col>
        <v-col>
          <demo-code-block code='<sr-success-alert>
     This is a success alert.
   </sr-success-alert>'/>
        </v-col>
      </v-row>
      <v-flex xs12>
        <h4 class="text-h4">Error Alert</h4>
      </v-flex>
      <v-row>
        <v-col>
          <sr-error-alert>
            This is an error alert.
          </sr-error-alert>
        </v-col>
        <v-col>
          <demo-code-block code='<sr-error-alert>
     This is an error alert.
   </sr-error-alert>'/>
        </v-col>
      </v-row>
      <v-flex xs12>
        <h4 class="text-h4">Info Alert</h4>
      </v-flex>
      <v-row>
        <v-col>
          <sr-info-alert>
            This is an info alert.
          </sr-info-alert>
        </v-col>
        <v-col>
          <demo-code-block code='<sr-info-alert>
     This is an info alert.
   </sr-info-alert>'/>
        </v-col>
      </v-row>
      <v-flex xs12>
        <h4 class="text-h4">Warning Alert</h4>
      </v-flex>
      <v-row>
        <v-col>
          <sr-warning-alert>
            This is a warning alert.
          </sr-warning-alert>
        </v-col>
        <v-col>
          <demo-code-block code='<sr-warning-alert>
     This is a warning alert.
   </sr-warning-alert>'/>
        </v-col>
      </v-row>
    </v-flex>
  </div>
</template>

<script>

export default {
    name: 'DemoAlerts'
}
</script>
