<template>
    <v-snackbar v-model="snackBar" :color="snackBarColor" :timeout="timeout" data-test-id="commonMessage">
        {{snackBarText}}
        <template #action>
            <v-btn v-if="snackBarLink"
                   icon text dark
                   :href="snackBarLink" target="_blank" class="ml-0">
                <v-icon>$openInNew</v-icon>
            </v-btn>
            <v-btn v-if="reloadPage" text @click="reloadThePage">{{translate('reload_page')}}</v-btn>
            <v-btn v-else icon text dark @click="snackBar = false">
                <v-icon>$close</v-icon>
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
import { onShowSnackBar } from '../../plugins/emitter'

export default {
    name: 'SrGlobalSnackBar',
    data () {
        return {
            snackBar: false,
            snackBarColor: undefined,
            snackBarLink: false,
            timeout: 5000,
            snackBarText: '',
            reloadPage: false
        }
    },
    mounted () {
        onShowSnackBar(({ text, color, timeout, link, reloadPage }) => {
            if (text) {
                this.snackBarText = text
                this.snackBarColor = color || 'primary'
                this.timeout = timeout || 5000
                this.snackBarLink = link || false
                this.reloadPage = reloadPage || false
                this.snackBar = true
            }
        })
    },
    methods: {
        reloadThePage () {
            window.location.reload()
        }
    }
}
</script>
