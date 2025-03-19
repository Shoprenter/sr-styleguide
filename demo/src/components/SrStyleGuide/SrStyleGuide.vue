<template>
    <sr-page-layout class="admin-style-guide">
        <sr-page-header :title="translate('help.style_guide')"></sr-page-header>

        <div class="admin-style-guide-layout">
            <div>
                <sr-style-guide-menu />
            </div>
            <div>
                <v-flex class="pb-5">
                    <p>Vuetify version: 2.6.14</p>
                </v-flex>
              <!--
                <v-layout class="sg-section" id="components" column wrap>
                    <v-flex xs12>
                        <h1 class="sg-section-header">Components</h1>
                    </v-flex>
                    <v-flex class="sg-subsection" id="buttons" column wrap>
                        <v-flex xs12>
                            <h2>Buttons</h2>
                        </v-flex>
                        <style-guide-buttons />
                    </v-flex>
                    <v-flex class="sg-subsection" id="input-forms" column wrap>
                        <v-flex xs12>
                            <h2>Input forms</h2>
                        </v-flex>
                        <style-guide-input-forms />
                    </v-flex>
                </v-layout>
                -->
            </div>
        </div>
    </sr-page-layout>
</template>
<script>
import './SrStyleGuide.scss'

import SrStyleGuideMenu from '../sections/SrStyleGuideMenu/SrStyleGuideMenu.vue'

export default {
    name: 'StyleGuide',
    components: {
        SrStyleGuideMenu
    }
}
</script>
