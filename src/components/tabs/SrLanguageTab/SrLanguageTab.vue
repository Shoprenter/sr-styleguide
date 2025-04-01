<template>
  <sr-tab v-bind="$attrs" v-on="$listeners">
    <component :is="language.icon" />
    {{ language.text }}
  </sr-tab>
</template>

<script>
import getLanguage from './adminLanguages'

export default {
    name: 'SrLanguageTab',
    inheritAttrs: false,
    props: {
        lang: {
            type: String,
            default: 'hu'
        }
    },
    data () {
        return {
            language: getLanguage(this.lang)
        }
    }
}
</script>
