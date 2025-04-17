<template>
  <div v-bind="$attrs">
    <div v-bind:[attribute]="value">
      <div class="new-style">
        <v-app class="sr-module">
          <v-main>
            <slot/>
          </v-main>
        </v-app>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SrModule',
    inheritAttrs: false,
    data () {
        const { attribute, value } = require('../scope')

        return {
            attribute,
            value
        }
    }
}
</script>
