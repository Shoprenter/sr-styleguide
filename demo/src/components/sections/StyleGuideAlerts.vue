<template>
    <v-flex class="sg-subsection">
        <v-alert prominent dismissible type="success">
            I'm a success alert.
            <v-btn class="ml-3">text</v-btn>
        </v-alert>

        <v-alert prominent dismissible type="info">
            I'm an info alert.
            <v-btn class="ml-3">text</v-btn>
        </v-alert>

        <v-alert prominent dismissible type="warning">
            I'm a warning alert.
        </v-alert>

        <v-alert prominent dismissible type="error">
            I'm an error alert.
        </v-alert>
    </v-flex>
</template>

<script>
export default {
    name: 'StyleGuideAlerts'
}
</script>
