<template>
  <div id="sr-styleguide">
    <div class="new-style">
      <v-app class="sr-page">
        <div>
          <div class="breadcrumb-container">
            <sr-breadcrumbs />
          </div>
          <div class="help-btn-container">
            <sr-help-button />
          </div>
        </div>
        <v-main>
          <slot />
        </v-main>
      </v-app>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SrPage'
}
</script>
