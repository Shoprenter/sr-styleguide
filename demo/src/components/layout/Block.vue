<template>
    <div class="admin-block" :class="modifiers">
        <v-toolbar v-if="title.length" class="admin-block__header" flat height="47">
            <v-toolbar-title class="text-h4">
                <slot name="headerTitle">
                    <v-icon v-if="titleIcon">{{titleIcon}}</v-icon>
                    {{ title }}
                </slot>
                <slot name="headerIconContent" />
            </v-toolbar-title>
            <v-spacer/>
            <v-toolbar-items>
                <slot name="headerItems"/>
            </v-toolbar-items>
        </v-toolbar>
        <div class="admin-block__content">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Block',
    props: {
        title: {
            required: false,
            default: false
        },
        titleIcon: {
            required: false,
            default: false
        },
        dense: {
            required: false,
            type: Boolean,
            default: false
        }
    },
    computed: {
        modifiers () {
            return {
                'admin-block--dense': this.dense
            }
        }
    }
}
</script>
