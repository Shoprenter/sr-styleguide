<template>
  <v-flex id="sr-style-guide-tabs">
    <v-flex class="sg-subsection">
      <v-flex xs12>
        <h4 class="text-h4">Simple tabs</h4>
      </v-flex>
      <div class="sg-block mb-4">
        <div class="tabs-container">
          <sr-tabs>
            <sr-tab>Tab 1</sr-tab>
            <sr-tab>Tab 2</sr-tab>
            <sr-tab>Tab 3</sr-tab>
          </sr-tabs>
        </div>
      </div>
      <sr-code-block code='<sr-tabs>
  <sr-tab>Tab 1</sr-tab>
  <sr-tab>Tab 2</sr-tab>
  <sr-tab>Tab 3</sr-tab>
</sr-tabs>'
      />
    </v-flex>
  </v-flex>
</template>

<script>
import './SrStyleGuideTabs.scss'

export default {
    name: 'SrStyleGuideMilestoneIndicators',
    inheritAttrs: false,
    data () {
        return {
            steps: [
                {
                    text: 'Completed step',
                    active: false,
                    completed: true
                },
                {
                    text: 'Active step',
                    active: true,
                    completed: false
                },
                {
                    text: 'Step',
                    active: false,
                    completed: false
                }
            ],
            code: `<sr-multi-step-progress-bar>
    <sr-progress-bar-step
        v-for="step in steps" :key="step.text"
        :completed="step.completed"
        :active="step.active">
        {{ step.text }}
    </sr-progress-bar-step>
 </sr-multi-step-progress-bar>`
        }
    }

}
</script>
