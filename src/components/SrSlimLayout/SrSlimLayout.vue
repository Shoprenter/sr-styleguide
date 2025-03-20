<template>
  <div class="page-layout--base page-layout--slim">
    <slot></slot>
  </div>
</template>

<script>

export default {
    name: 'SrSlimLayout',
    props: ['title']
}
</script>
