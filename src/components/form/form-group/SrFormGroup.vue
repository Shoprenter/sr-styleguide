<template>
  <div class="admin-form-group">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'SrFormGroup',
  props: {
    label: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../plugins/vuetify/preset/variables";
@import "../../../plugins/vuetify/preset/style/scss/mixins/breakpoints";

.admin-form-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .admin-form-row {
    flex: 0 0 100%;
  }

  @include media-breakpoint-up(sm) {
    .admin-form-row {
      flex: 1;
      margin-right: 10px;
      margin-left: 10px;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
