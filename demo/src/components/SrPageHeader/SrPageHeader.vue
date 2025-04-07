<template>
    <div class="admin-page-header">
        <div class="admin-breadcrumb-container">
            <sr-breadcrumb/>
            <sr-help-button />
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
import './SrPageHeader.scss'

export default {
    name: 'SrPageHeader',
    props: {
        title: {
            required: false,
            type: String
        }
    },
    computed: {
        helpUrl () {
            return this.$route && this.$route.meta && this.$route.meta.helpUrl
        }
    }
}
</script>
