<template>
    <v-app>
        <v-main>
            <v-container class="admin-container" fluid>
                <v-slide-x-transition mode="out-in" @after-leave="$root.$emit('triggerScroll')">
                    <router-view/>
                </v-slide-x-transition>
                <global-snack-bar/>
            </v-container>
        </v-main>
        <div class="text-center py-5 my-5">
            <v-btn v-if="helpUrl" :href="$route.meta.helpUrl" :ripple="false" target="_blank" class="admin-help-button link-secondary" text>
                {{translate('help_text')}}<v-icon>$helpCircleOutline</v-icon>
            </v-btn>
        </div>
    </v-app>
</template>

<script>
import GlobalSnackBar from '../SrGlobalSnackBar/SrGlobalSnackBar.vue'

export default {
    name: 'SrAdminApp',
    components: { GlobalSnackBar },
    computed: {
        helpUrl () {
            return this.$route && this.$route.meta && this.$route.meta.helpUrl
        }
    }
}
</script>
