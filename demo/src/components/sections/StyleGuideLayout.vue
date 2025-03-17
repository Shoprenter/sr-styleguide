<template>
    <div>
        <v-flex class="sg-subsection">
            <v-flex xs12>
                <h2>Basic</h2>
            </v-flex>
            <v-card flat>
                <v-card-text>
                    <page-layout class="admin-example-page">
                        <page-header title="Admin example page title"></page-header>
                        <div class="admin-page-content">
                            Admin example page content
                        </div>
                    </page-layout>
                </v-card-text>
            </v-card>
            <div class="sg-block">
                <p>Use <code>page-layout</code> and <code>page-header</code> component for basic layouts</p>
            </div>
        </v-flex>
        <v-flex class="sg-subsection">
            <v-flex xs12>
                <h2>Slim layout</h2>
            </v-flex>
            <page-layout class="page-layout--slim">
                <div class="d-flex w-100 justify-space-between mb-4">
                    <h1>Page title</h1>
                    <div>
                        <v-btn outlined color="primary">Cancel</v-btn>
                        <v-btn class="ml-3" color="primary">Save</v-btn>
                    </div>
                </div>
                <v-card flat>
                    <v-card-text>
                        <div class="admin-page-content">
                            Admin example slim content
                        </div>
                    </v-card-text>
                </v-card>
            </page-layout>
            <div class="sg-block">
                <p>For slim pages use <code>page-layout</code> component with <code>slim</code> props</p>
            </div>
        </v-flex>
    </div>
</template>

<script>

export default {
    name: 'StyleGuideLayout'
}
</script>
