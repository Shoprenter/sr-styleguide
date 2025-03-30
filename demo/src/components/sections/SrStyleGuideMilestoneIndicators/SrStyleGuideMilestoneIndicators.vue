<template>
  <v-flex id="sr-style-guide-milestone-indicators">
    <v-flex class="sg-subsection">
      <v-flex xs12>
        <h4 class="text-h4">Multi-step Progress Bar</h4>
      </v-flex>
      <div class="sg-block mb-4">
        <sr-multi-step-progress-bar>
          <sr-progress-bar-step completed>Completed step</sr-progress-bar-step>
          <sr-progress-bar-step selected>Active step</sr-progress-bar-step>
          <sr-progress-bar-step>Step</sr-progress-bar-step>
        </sr-multi-step-progress-bar>
      </div>
      <div class="code-container">
        <sr-code-block code='<sr-multi-step-progress-bar>
    <sr-progress-bar-step completed>Completed step</sr-progress-bar-step>
    <sr-progress-bar-step selected>Active step</sr-progress-bar-step>
    <sr-progress-bar-step>Step</sr-progress-bar-step>
 </sr-multi-step-progress-bar>
'/>
      </div>
    </v-flex>
  </v-flex>
</template>

<script>

export default {
    name: 'SrStyleGuideMilestoneIndicators',
    inheritAttrs: false
}
</script>
