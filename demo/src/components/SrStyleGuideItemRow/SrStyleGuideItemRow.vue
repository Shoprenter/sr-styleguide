<template>
  <v-row align="center" no-gutters class="style-guide-row">
    <v-col cols="auto" class="element-container">
      <slot />
    </v-col>
    <v-col class="code-container">
      <sr-code-block :code="code" />
    </v-col>
  </v-row>
</template>

<script>
export default {
    props: {
        code: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.style-guide-row {
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  align-items: center;
}

.element-container {
  width: 200px;
  min-width: 200px;
  display: flex;
  justify-content: flex-start;
}

.code-container {
  flex-grow: 1;
  min-width: 300px;
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .style-guide-row {
    flex-direction: column;
  }

  .element-container {
    width: 100%;
  }
}
</style>
