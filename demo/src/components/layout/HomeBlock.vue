<template>
    <div class="admin-home-block">
        <v-toolbar v-if="title.length" class="admin-home-block__header" flat height="35">
            <v-toolbar-title>
                <slot name="headerTitle">
                    <h2 class="text-h1">{{ title }}</h2>
                </slot>
            </v-toolbar-title>
            <v-spacer/>
        </v-toolbar>
        <div class="admin-home-block__content">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeBlock',
    props: {
        title: {
            required: false,
            default: false
        }
    }
}
</script>
