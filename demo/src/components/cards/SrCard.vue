<template>
    <v-card
        :href="href"
        :height="height"
        :target="target"
        :max-width="maxWidth"
        :to="to"
        flat
    >
        <template v-if="headerType === 'icon'">
            <v-list-item two-line>
                <div class="v-card__icon">
                    <v-avatar width="70" height="70">
                        <slot name="icon"></slot>
                    </v-avatar>
                </div>
                <v-card-title>
                    <slot name="title">{{ title }}</slot>
                </v-card-title>
            </v-list-item>
        </template>
        <div v-else class="admin-card__header">
            <slot name="image"></slot>
        </div>
        <v-card-text>
            <slot name="text">
                {{ text }}
            </slot>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'SrCard',
    props: {
        href: {
            type: String,
            required: false
        },
        headerType: {
            type: String,
            required: false,
            default: 'icon'
        },
        to: {
            required: false
        },
        title: {
            type: String,
            required: false
        },
        text: {
            type: String,
            required: false
        },
        height: {
            required: false
        },
        maxWidth: {
            required: false
        },
        target: {
            type: String,
            required: false
        }
    }
}
</script>
