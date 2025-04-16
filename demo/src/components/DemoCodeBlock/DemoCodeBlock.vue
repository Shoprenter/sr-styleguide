<template>
  <div class="sr-code-block code-container" :style="computedWidth">
    <div class="code-block" :style="computedWidth">
      <pre :class="`language-${language} ma-0`"><code ref="code">{{ code }}</code></pre>
    </div>
    <div class="flex">
      <v-btn icon class="copy-button ml-2" color="primary" @click="copyCode">
        <sr-duplicate-icon size="20"/>
      </v-btn>

      <transition name="fade">
        <span class="copied-text" v-if="copied">Másolva!</span>
      </transition>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-markup.js'
import 'prismjs/components/prism-javascript.js'

import './DemoCodeBlock.scss'

export default {
    props: {
        code: {
            type: String,
            required: true
        },
        language: {
            type: String,
            default: 'html'
        },
        width: {
            type: String,
            default: null
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
    computed: {
        computedWidth () {
            return this.width ? 'width:' + this.width + ' !important;' : null
        }
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
