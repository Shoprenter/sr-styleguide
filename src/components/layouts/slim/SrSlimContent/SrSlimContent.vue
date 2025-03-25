<template>
  <v-card flat>
    <v-card-text>
      <div class="admin-page-content">
        <slot></slot>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
    name: 'SrSlimContent'
}
</script>
