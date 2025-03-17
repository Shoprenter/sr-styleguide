<template>
    <div>
        <div class="sg-block">
            <h4>Default form row</h4>
            <form-row :label="'Form input label'">
                <v-text-field outlined dense clearable hide-details placeholder="v-text-field"/>
            </form-row>
            <form-row :label="'Form input label'">
                <v-text-field outlined dense clearable hide-details placeholder="v-text-field"/>
            </form-row>
        </div>
        <div class="sg-block">
            <h4>Form group</h4>
            <form-group>
                <form-row :label="'Form input label'">
                    <v-text-field outlined dense clearable hide-details placeholder="v-text-field"/>
                </form-row>
                <form-row :label="'Form input label'">
                    <v-text-field outlined dense clearable hide-details placeholder="v-text-field"/>
                </form-row>
            </form-group>
            <form-group>
                <form-row :label="'Form input label'">
                    <v-text-field outlined dense clearable hide-details placeholder="v-text-field"/>
                </form-row>
                <form-row :label="'Form input label'">
                    <v-text-field outlined dense clearable hide-details placeholder="v-text-field"/>
                </form-row>
                <form-row :label="'Form input label'">
                    <v-text-field outlined dense clearable hide-details placeholder="v-text-field"/>
                </form-row>
            </form-group>
        </div>
        <div class="sg-block">
            <h4>Default form row with separator</h4>
            <div class="my-5">
                <code>.admin-form-row__separator</code>
            </div>
            <form-row :label="'Form input label'">
                <v-text-field outlined dense clearable hide-details placeholder="v-text-field"/>
            </form-row>
            <form-row :label="'Form input label'">
                <v-text-field outlined dense clearable hide-details placeholder="v-text-field"/>
            </form-row>
            <div class="admin-form-row__separator"></div>
            <form-row :label="'Form input label'">
                <v-text-field outlined dense clearable hide-details placeholder="v-text-field"/>
            </form-row>
            <form-row :label="'Form input label'">
                <v-text-field outlined dense clearable hide-details placeholder="v-text-field"/>
            </form-row>
        </div>
    </div>
</template>

<script>

export default {
    name: 'StyleGuideFormRows'
}
</script>
