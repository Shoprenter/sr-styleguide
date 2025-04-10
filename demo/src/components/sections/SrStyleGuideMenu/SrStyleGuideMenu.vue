<template>
  <div class="admin-style-guide__menu">
    <v-list flat>
      <v-list-item-group>
        <template>
          <v-list-item v-for="section in sections" :key="section.text">
            <div>
              <v-list-item-content @click="$vuetify.goTo(section.goTo, { offset: 100 })">
                {{ section.text }}
              </v-list-item-content>

              <v-list dense v-if="section.components">
                <template>
                  <v-list-item v-for="component in section.components" :key="component.text">
                    <div>
                      <v-list-item-content @click="$vuetify.goTo(component.goTo, { offset: 110 })">
                        {{ component.text }}
                      </v-list-item-content>

                      <!-- Harmadik szint -->
                      <v-list dense v-if="component.subComponents">
                        <v-list-item
                            v-for="sub in component.subComponents"
                            :key="sub.text"
                            class="pl-4"
                            @click="$vuetify.goTo(sub.goTo, { offset: 120 })"
                        >
                          <v-list-item-content>
                            {{ sub.text }}
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>

                    </div>
                  </v-list-item>
                </template>
              </v-list>

            </div>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import './SrStyleGuideMenu.scss'

export default {
    name: 'SrStyleGuideMenu',
    data () {
        return {
            sections: [
                {
                    text: 'Layouts',
                    goTo: '#layouts',
                    components: [
                        { text: 'Slim Layout', goTo: '#slim-layout' },
                        { text: 'Standard Layout', goTo: '#standard-layout' }
                    ]
                },
                {
                    text: 'Components',
                    goTo: '#components',
                    components: [
                        {
                            text: 'Buttons',
                            goTo: '#buttons'
                        },
                        {
                            text: 'Inputs',
                            goTo: '#inputs',
                            subComponents: [
                                { text: 'Input Fields', goTo: '#text-inputs' },
                                { text: 'Select', goTo: '#select-inputs' },
                                { text: 'Checkbox', goTo: '#checkbox-inputs' },
                                { text: 'Simple Multi Checkbox', goTo: '#simple-multi-checkbox-inputs' },
                                { text: 'Multi Checkbox', goTo: '#multi-checkbox-inputs' },
                                { text: 'Switch', goTo: '#switch-inputs' },
                                { text: 'Radio', goTo: '#radio-inputs' },
                                { text: 'Date Picker', goTo: '#date-picker-input' }
                            ]
                        },
                        { text: 'Form Row', goTo: '#form-row' },
                        { text: 'Tables', goTo: '#tables' },
                        { text: 'Pagination', goTo: '#pagination' },
                        { text: 'Alerts', goTo: '#alerts' },
                        { text: 'Milestone Indicators', goTo: '#milestone-indicators' },
                        { text: 'Tabs', goTo: '#tabs' },
                        { text: 'Icons', goTo: '#icons' }
                    ]
                },
                {
                    text: 'App Containers',
                    goTo: '#app-containers'
                }
            ]
        }
    }
}
</script>
