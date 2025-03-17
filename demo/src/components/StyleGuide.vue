<template>
    <page-layout class="admin-style-guide">
        <page-header :title="translate('help.style_guide')"></page-header>

        <div class="admin-style-guide-layout">
            <div>
                <style-guide-menu />
            </div>
            <div>
                <v-flex class="pb-5">
                    <p>Vuetify version: 2.6.14</p>
                </v-flex>
                <v-layout class="sg-section" id="colors" column wrap>
                    <v-flex xs12>
                        <h1 class="sg-section-header">Colors</h1>
                    </v-flex>
                    <style-guide-colors />
                </v-layout>
                <v-layout class="sg-section" id="typography" column wrap>
                    <v-flex xs12>
                        <h1 class="sg-section-header">Typography</h1>
                    </v-flex>
                    <style-guide-typography />
                </v-layout>
                <v-layout class="sg-section" id="layout" column wrap>
                    <v-flex xs12>
                        <h1 class="sg-section-header">Layout</h1>
                    </v-flex>
                    <style-guide-layout />
                </v-layout>
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
                    <v-flex class="sg-subsection" id="form-rows" column wrap>
                        <v-flex xs12>
                            <h2>Form rows</h2>
                        </v-flex>
                        <style-guide-form-rows />
                    </v-flex>
                    <v-flex class="sg-subsection" id="alerts" column wrap>
                        <v-flex xs12>
                            <h2>Alerts</h2>
                        </v-flex>
                        <style-guide-alerts />
                    </v-flex>
                    <v-flex class="sg-subsection" id="tooltips" column wrap>
                        <v-flex xs12>
                            <h2>Tooltips</h2>
                        </v-flex>
                        <style-guide-tooltips />
                    </v-flex>
                    <v-flex class="sg-subsection" id="icons" column wrap>
                        <v-flex xs12>
                            <h2>Icons</h2>
                        </v-flex>
                        <style-guide-icons />
                    </v-flex>
                    <v-flex class="sg-subsection" id="cards" column wrap>
                        <v-flex xs12>
                            <h2>Cards</h2>
                        </v-flex>
                        <style-guide-cards />
                    </v-flex>
                    <v-flex class="sg-subsection" id="tables" column wrap>
                        <v-flex xs12>
                            <h2>Tables</h2>
                        </v-flex>
                        <style-guide-table />
                    </v-flex>
                    <v-flex class="sg-subsection" id="dialogs" column wrap>
                        <v-flex xs12>
                            <h2>Dialogs</h2>
                        </v-flex>
                        <style-guide-dialogs />
                    </v-flex>
                </v-layout>
            </div>
        </div>
    </page-layout>
</template>
<script>
import SearchTextField from '../components/input/SearchTextField'
import StyleGuideColors from './sections/StyleGuideColors'
import StyleGuideTypography from './sections/StyleGuideTypography'
import StyleGuideButtons from './sections/StyleGuideButtons'
import StyleGuideInputForms from './sections/StyleGuideInputForms'
import StyleGuideFormRows from './sections/StyleGuideFormRows'
import StyleGuideTable from './sections/StyleGuideTable'
import StyleGuideMenu from './sections/StyleGuideMenu'
import StyleGuideAlerts from './sections/StyleGuideAlerts'
import StyleGuideLayout from './sections/StyleGuideLayout'
import StyleGuideTooltips from './sections/StyleGuideTooltips'
import StyleGuideDialogs from './sections/StyleGuideDialogs'
import StyleGuideCards from './sections/StyleGuideCards'
import StyleGuideIcons from './sections/StyleGuideIcons'

export default {
    name: 'StyleGuide',
    components: {
        StyleGuideDialogs,
        StyleGuideTooltips,
        StyleGuideLayout,
        StyleGuideAlerts,
        StyleGuideMenu,
        SearchTextField,
        StyleGuideColors,
        StyleGuideTypography,
        StyleGuideButtons,
        StyleGuideInputForms,
        StyleGuideFormRows,
        StyleGuideTable,
        StyleGuideCards,
        StyleGuideIcons
    }
}
</script>
