<template>
    <div class="admin-page-header">
        <div class="admin-breadcrumb-container">
            <breadcrumb/>
            <v-btn v-if="helpUrl" :href="$route.meta.helpUrl" target="_blank" :ripple="false" class="admin-help-button link-secondary" text>
                {{translate('help_text')}}<v-icon>$helpCircleOutline</v-icon>
            </v-btn>
        </div>
        <div class="admin-page-header-head">
            <slot name="header"></slot>
        </div>
        <div class="admin-page-header-title">
            <h1>
                <slot v-if="$slots.icon" name="icon">
                    <v-icon>$setting</v-icon>
                </slot>
                <slot name="title">
                    {{ title }}
                </slot>
            </h1>
            <div class="admin-page-header-content">
                <slot />
            </div>
        </div>
        <div class="admin-page-header-foot">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '../Breadcrumb'
export default {
    name: 'PageHeader',
    props: {
        title: {
            required: false,
            type: String
        }
    },
    components: {
        Breadcrumb
    },
    computed: {
        helpUrl () {
            return this.$route && this.$route.meta && this.$route.meta.helpUrl
        }
    }
}
</script>
