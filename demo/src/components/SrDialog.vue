<template>
    <v-dialog :value="value"
              @click:outside="close"
              :max-width="maxWidth"
              :max-height="maxHeight"
              content-class="sr-dialog"
              :scrollable="scrollable"
              :attach="attach"
              @input="close"
              :persistent="persistent"
              :retain-focus="retainFocus"
    >
        <v-card :class="className">
            <v-card-title>
                <div class="d-flex justify-space-between">
                    <div class="sr-dialog-title text-h4">
                        <slot name="title">{{title}}</slot>
                    </div>
                    <v-btn v-if="!persistent" color="grey darken-1" class="admin-dialog-close-button" icon text>
                        <v-icon @click="close">$close</v-icon>
                    </v-btn>
                </div>
            </v-card-title>
            <v-divider v-if="scrollable"/>
            <v-card-text @scroll="scroll">
                <slot></slot>
            </v-card-text>
            <v-divider v-if="scrollable" class="mb-4"/>
            <v-card-actions>
                <slot name="actions"></slot>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'SrDialog',
    props: {
        value: {
            required: false,
            default: false
        },
        title: {
            required: false
        },
        maxWidth: {
            required: false,
            default: false
        },
        className: {
            required: false,
            default: ''
        },
        maxHeight: {
            required: false,
            default: false
        },
        scrollable: {
            required: false,
            type: Boolean,
            default: false
        },
        attach: {
            required: false,
            default: undefined
        },
        persistent: {
            required: false,
            type: Boolean,
            default: false
        },
        retainFocus: {
            required: false,
            type: Boolean,
            default: true
        }
    },
    methods: {
        close () {
            if (!this.persistent) {
                this.$emit('input', false)
                this.$emit('click:outside')
            }
        },
        scroll (event) {
            if (this.scrollable) {
                this.$emit('scroll:content', event)
            }
        }
    }
}
</script>
