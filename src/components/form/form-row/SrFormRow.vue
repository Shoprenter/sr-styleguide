<template>
  <v-row dense>
    <v-col cols="3">
      <div class="admin-form-row">
        <div class="admin-form-row__label">
          <slot name="label">
            <v-label>{{ label }}<span v-if="required" class="required">*</span></v-label>
            <div class="help">
              Ez lesz a help szöveg
            </div>
          </slot>
        </div>
        <div class="admin-form-row__element">
          <slot/>
        </div>
      </div>
    </v-col>
    <v-col cols="4">
      <sr-input-field type="text"></sr-input-field>
    </v-col>
    <v-col cols="5">
    </v-col>
  </v-row>
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

.new-style .form-help,.new-style .help {
  color: var(--sr-dark-grey);
  font-size: 12px;
  font-weight: 400;
  display: block;
  text-transform: none;
  margin-top: 4px
}
</style>
