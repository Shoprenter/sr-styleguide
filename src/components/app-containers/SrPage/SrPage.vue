<template>
  <div id="sr-styleguide">
    <div class="new-style">
      <v-app class="sr-page">
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
