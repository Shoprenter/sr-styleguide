<template>
  <div class="sr-code-block-container">
    <pre><code>{{ code }}</code></pre>
  </div>
</template>

<script>
import './SrCodeBlock.scss'

export default {
    name: 'SrCodeBlock',
    props: ['code']
}
</script>
