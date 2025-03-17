<template>
    <v-flex class="sg-subsection">
        <v-btn color="primary" @click="showModal = true">Show dialog</v-btn>
        <sr-dialog v-model="showModal" max-width="600" title="Shoprenter Admin dialog">
            <form-row label="Form row 1">
                <v-text-field outlined dense hide-details />
            </form-row>
            <form-row label="Form row 2">
                <v-text-field outlined dense hide-details />
            </form-row>
            <form-row label="Form row 3">
                <v-text-field outlined dense hide-details />
            </form-row>
            <template #actions>
                <v-btn color="primary" outlined @click="closeModal">Mégsem</v-btn>
                <v-spacer/>
                <v-btn color="primary" @click="saveModal">Módosítás</v-btn>
            </template>
        </sr-dialog>
    </v-flex>
</template>

<script>
export default {
    name: 'StyleGuideDialogs',
    data: () => ({
        showModal: false
    }),
    methods: {
        closeModal () {
            this.showModal = false
        },
        saveModal () {
            this.showModal = false
        }
    }
}
</script>
