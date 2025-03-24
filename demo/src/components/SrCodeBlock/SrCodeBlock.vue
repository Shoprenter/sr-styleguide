<template>
  <div class="code-block">
    <pre :class="`language-${language} ma-0`"><code ref="code">{{ code }}</code></pre>
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
    mounted () {
        this.highlight()
    },
    methods: {
        highlight () {
            this.$nextTick(() => {
                Prism.highlightElement(this.$refs.code)
            })
        }
    }
}
</script>
