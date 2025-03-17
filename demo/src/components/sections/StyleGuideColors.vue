<template>
    <div class="sg-subsection">
        <div xs12>
            <h2>Types</h2>
        </div>
        <div class="sg-colors-layout">
            <div>
                <v-card elevation="2" color="primary">
                    <v-card-text class="white--text font-weight-medium">{{ $vuetify.theme.themes.light.primary }}</v-card-text>
                </v-card>
                <div class="color-name">primary</div>
            </div>
            <div>
                <v-card elevation="2" color="success">
                    <v-card-text class="white--text font-weight-medium">{{ $vuetify.theme.themes.light.success }}</v-card-text>
                </v-card>
                <div class="color-name">success</div>
            </div>
            <div>
                <v-card elevation="2" color="error">
                    <v-card-text class="white--text font-weight-medium">{{ $vuetify.theme.themes.light.error }}</v-card-text>
                </v-card>
                <div class="color-name">error</div>
            </div>
            <div>
                <v-card elevation="2" color="warning">
                    <v-card-text class="text--primary font-weight-medium">{{ $vuetify.theme.themes.light.warning }}</v-card-text>
                </v-card>
                <div class="color-name">warning</div>
            </div>
            <div>
                <v-card elevation="2" color="info">
                    <v-card-text class="white--text font-weight-medium">{{ $vuetify.theme.themes.light.info }}</v-card-text>
                </v-card>
                <div class="color-name">info</div>
            </div>
        </div>
        <div class="sg-block">
            <h2>Color variables</h2>
            <div class="sg-colors-layout">
                <div>
                    <v-card elevation="2" style="background-color: var(--sr-black)">
                        <v-card-text class="white--text font-weight-medium">#282D33</v-card-text>
                    </v-card>
                    <div class="color-name">--sr-black</div>
                </div>
                <div>
                    <v-card elevation="2" style="background-color: var(--sr-dark-grey)">
                        <v-card-text class="white--text font-weight-medium">#5D6978</v-card-text>
                    </v-card>
                    <div class="color-name">--sr-dark-grey</div>
                </div>
                <div>
                    <v-card elevation="2" style="background-color: var(--sr-link-grey)">
                        <v-card-text class="white--text font-weight-medium">#647382</v-card-text>
                    </v-card>
                    <div class="color-name">--sr-link-grey</div>
                </div>
                <div>
                    <v-card elevation="2" style="background-color: var(--sr-secondary-text)">
                        <v-card-text class="white--text font-weight-medium">#838B95</v-card-text>
                    </v-card>
                    <div class="color-name">--sr-secondary-text</div>
                </div>
                <div>
                    <v-card elevation="2" style="background-color: var(--sr-dark-link-grey)">
                        <v-card-text class="white--text font-weight-medium">#929FAB</v-card-text>
                    </v-card>
                    <div class="color-name">--sr-dark-link-grey</div>
                </div>
                <div>
                    <v-card elevation="2" style="background-color: var(--sr-light-grey)">
                        <v-card-text class="text--primary font-weight-medium">#E6E8EC</v-card-text>
                    </v-card>
                    <div class="color-name">--sr-light-grey</div>
                </div>
                <div>
                    <v-card elevation="2" style="background-color: var(--sr-pale-gray)">
                        <v-card-text class="text--primary font-weight-medium">#D7DBDD</v-card-text>
                    </v-card>
                    <div class="color-name">--sr-pale-gray</div>
                </div>
                <div>
                    <v-card elevation="2" style="background-color: var(--sr-bg-grey)">
                        <v-card-text class="text--primary font-weight-medium">#F7F8F9</v-card-text>
                    </v-card>
                    <div class="color-name">--sr-bg-grey</div>
                </div>
                <div>
                    <v-card elevation="2" style="background-color: var(--sr-white)">
                        <v-card-text class="text--primary font-weight-medium">#FFFFFF</v-card-text>
                    </v-card>
                    <div class="color-name">--sr-white</div>
                </div>
                <div>
                    <v-card elevation="2" style="background-color: var(--sr-anchor)">
                        <v-card-text class="white--text font-weight-medium">#518400</v-card-text>
                    </v-card>
                    <div class="color-name">--sr-anchor</div>
                </div>
                <div>
                    <v-card elevation="2" style="background-color: var(--sr-hover-green)">
                        <v-card-text class="white--text font-weight-medium">#619D01</v-card-text>
                    </v-card>
                    <div class="color-name">--sr-hover-green</div>
                </div>
                <div>
                    <v-card elevation="2" style="background-color: var(--sr-light-green)">
                        <v-card-text class="text--primary font-weight-medium">#AAE600</v-card-text>
                    </v-card>
                    <div class="color-name">--sr-light-green</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'StyleGuideColors'
}

</script>
