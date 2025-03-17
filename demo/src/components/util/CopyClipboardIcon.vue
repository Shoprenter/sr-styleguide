<template>
    <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
            <v-icon
                v-bind="attrs"
                v-on="on"
                @click="copyToClipBoard(value)"
            >$duplicate</v-icon>
        </template>
        <span>{{translate('copy_to_clipboard')}}</span>
    </v-tooltip>
</template>

<script>
import {copyToClipBoard} from './CopyToClipBoard'

export default {
    name: 'CopyToClipboardIcon',
    props: ['value'],
    methods: {
        copyToClipBoard
    }
}
</script>
