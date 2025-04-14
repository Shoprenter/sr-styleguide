<template>
  <div class="page-layout--base page-layout--standard">
    <div>
      <div class="breadcrumb-container">
        <sr-breadcrumbs />
      </div>
      <div class="help-btn-container">
        <sr-help-button />
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>

export default {
    name: 'SrStandardLayout',
    props: ['title']
}
</script>
