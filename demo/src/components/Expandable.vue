<template>
    <div>
        <v-label @click="expand = !expand">
            <slot name="label">
                {{label}}
            </slot>
            <v-icon small>{{expand ? 'mdi-chevron-right' : 'mdi-chevron-down'}}</v-icon>
        </v-label>
        <v-expand-transition>
            <div v-show="expand">
                <slot/>
            </div>
        </v-expand-transition>
    </div>
</template>

<script>
export default {
    name: 'Expandable',
    props: {
        label: {
            required: false,
            type: String
        },
        defaultOpen: {
            required: false,
            type: Boolean
        }
    },
    created () {
        if (this.defaultOpen) {
            this.expand = true
        }
    },
    data () {
        return {
            expand: false
        }
    }
}
</script>
