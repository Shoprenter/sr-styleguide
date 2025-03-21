<template>
  <div class="admin-form-row">
    <div class="admin-form-row__label">
      <slot name="label">
        <v-label>{{ label }}<span v-if="required" class="required">*</span></v-label>
      </slot>
    </div>
    <div class="admin-form-row__element">
      <slot/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SrFormRow',
  props: {
    label: {
      type: String,
      required: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.admin-form-row {
  margin-bottom: 16px;
}

.admin-form-row__label {
  margin-bottom: 5px;
}
</style>
