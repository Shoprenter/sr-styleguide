<template>
  <div class="page-layout--base page-layout--standard">
    <slot></slot>
  </div>
</template>

<script>

export default {
    name: 'SrStandardLayout',
    props: ['title']
}
</script>
