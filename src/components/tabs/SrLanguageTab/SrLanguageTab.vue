<template>
  <sr-tab v-bind="$attrs" v-on="$listeners" class="sr-language-tab">
    <component :is="language.icon" width="20" />
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
