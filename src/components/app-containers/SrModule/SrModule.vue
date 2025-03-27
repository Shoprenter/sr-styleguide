<template>
  <div id="sr-styleguide">
    <div class="new-style">
      <v-app class="sr-module">
        <v-main>
          <slot />
        </v-main>
      </v-app>
    </div>
  </div>
</template>

<script>
import './SrModule.scss'
export default {
    name: 'SrModule'
}
</script>
