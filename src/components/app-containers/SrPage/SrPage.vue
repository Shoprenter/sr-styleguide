<template>
  <div id="sr-styleguide">
    <div class="new-style">
      <v-app class="sr-page">
        <v-row>
          <v-col cols="6">
            <sr-breadcrumbs />
          </v-col>
          <v-col cols ="6" class="text-right">
            <sr-help-button/>
          </v-col>
        </v-row>
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
