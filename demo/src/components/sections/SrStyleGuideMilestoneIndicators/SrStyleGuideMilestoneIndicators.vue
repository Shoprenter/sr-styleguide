<template>
  <v-flex id="sr-style-guide-milestone-indicators">
    <v-flex class="sg-subsection">
      <v-flex xs12>
        <h4 class="text-h4">Multi-step Progress Bar</h4>
      </v-flex>
      <div class="sg-block mb-4">
        <sr-multi-step-progress-bar>
          <sr-progress-bar-step
            v-for="step in steps" :key="step.text"
            :completed="step.completed"
            :active="step.active"
          >
            {{ step.text }}
          </sr-progress-bar-step>
        </sr-multi-step-progress-bar>
      </div>
      <v-row>
        <v-col :cols="6">
            <sr-code-block :code='code'/>
        </v-col>
        <v-col :cols="6">
          <sr-code-block language="JavaScript" code="data () {
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
            ]
        }"/>
        </v-col>
      </v-row>

    </v-flex>
  </v-flex>
</template>

<script>

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
