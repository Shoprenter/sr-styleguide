<template>
    <v-flex>
        <v-row>
            <v-col cols="1">
                <v-card>
                    <v-list-item>
                        <v-list-item-content>
                            <v-tooltip color="info" top>
                                <template v-slot:activator="{ on }">
                                    <v-icon v-on="on">$mail</v-icon>
                                </template>
                                <span>Tooltip</span>
                            </v-tooltip>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-col>
            <v-col cols="1">
                <v-card>
                    <v-list-item>
                        <v-list-item-content>
                            <v-tooltip color="warning" top>
                                <template v-slot:activator="{ on }">
                                    <v-icon v-on="on">$duplicate</v-icon>
                                </template>
                                <span>Tooltip</span>
                            </v-tooltip>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-col>
        </v-row>
    </v-flex>
</template>

<script>
export default {
    name: 'StyleGuideTooltips'
}
</script>
