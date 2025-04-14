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
                    text: 'Getting Started',
                    goTo: '#getting-started',
                    components: [
                        { text: 'Introduction', goTo: '#introduction' },
                        { text: 'Features', goTo: '#features' },
                        { text: 'Requirements', goTo: '#requirements' },
                        { text: 'Installation', goTo: '#installation' },
                        { text: 'Usage', goTo: '#usage' },
                        { text: 'Example', goTo: '#example' },
                        { text: 'Changelog', goTo: '#changelog' },
                        { text: 'Contribution', goTo: '#contribution' }
                    ]
                },
                {
                    text: 'Demo Pages',
                    goTo: '#demo-pages',
                    components: [
                        { text: 'Form Page', goTo: '#form-page' },
                        { text: 'List Page', goTo: '#list-page' }
                    ]
                },
                {
                    text: 'App Containers',
                    goTo: '#app-containers'
                },
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
                            text: 'Alerts',
                            goTo: '#alerts'
                        },
                        {
                            text: 'Buttons',
                            goTo: '#buttons'
                        },
                        {
                            text: 'Form Row',
                            goTo: '#form-row'
                        },
                        {
                            text: 'Icons',
                            goTo: '#icons'
                        },
                        {
                            text: 'Inputs',
                            goTo: '#inputs',
                            subComponents: [
                                { text: 'Checkbox', goTo: '#checkbox-inputs' },
                                { text: 'Date Picker', goTo: '#date-picker-input' },
                                { text: 'Number Input', goTo: '#number-input' },
                                { text: 'Multi Checkbox', goTo: '#multi-checkbox-inputs' },
                                { text: 'Radio', goTo: '#radio-inputs' },
                                { text: 'Select', goTo: '#select-inputs' },
                                { text: 'Simple Multi Checkbox', goTo: '#simple-multi-checkbox-inputs' },
                                { text: 'Switch', goTo: '#switch-inputs' },
                                { text: 'Text Area', goTo: '#text-area-input' },
                                { text: 'Text Input', goTo: '#text-input' }
                            ]
                        },
                        {
                            text: 'Milestone Indicators',
                            goTo: '#milestone-indicators'
                        },
                        {
                            text: 'Pagination',
                            goTo: '#pagination'
                        },
                        {
                            text: 'Tables',
                            goTo: '#tables'
                        },
                        {
                            text: 'Tabs',
                            goTo: '#tabs'
                        }
                    ]
                }
            ]

        }
    }
}
</script>
