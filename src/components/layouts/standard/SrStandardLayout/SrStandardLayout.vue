<template>
  <div class="page-layout--base">
    <slot></slot>
  </div>
</template>

<script>

export default {
    name: 'SrStandardLayout',
    props: ['title']
}
</script>
