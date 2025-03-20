<template>
  <div class="code-block">
    <pre :class="`language-${language} ma-0`"><code ref="code">{{ code }}</code></pre>
    <v-btn icon class="copy-button" @click="copyCode">
      <sr-duplicate-icon size="20"/>
    </v-btn>
    <transition name="fade">
      <span v-if="copied" class="copied-text">Másolva!</span>
    </transition>
  </div>
</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-markup.js'
import 'prismjs/components/prism-javascript.js'

import './SrCodeBlock.scss'

export default {
    props: {
        code: {
            type: String,
            required: true
        },
        language: {
            type: String,
            default: 'html'
        }
    },
    data () {
        return {
            copied: false
        }
    },
    mounted () {
        this.highlight()
    },
    methods: {
        highlight () {
            this.$nextTick(() => {
                Prism.highlightElement(this.$refs.code)
            })
        },
        copyCode () {
            navigator.clipboard.writeText(this.code)
            this.copied = true
            setTimeout(() => {
                this.copied = false
            }, 600)
        }
    }
}
</script>
