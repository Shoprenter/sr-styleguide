<template>
  <div class="sr-heading d-flex w-100 justify-space-between mb-4">
    <h1 class="text-h1">{{ title }}</h1>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
    name: 'SrSlimHeading',
    props: ['title']
}
</script>
