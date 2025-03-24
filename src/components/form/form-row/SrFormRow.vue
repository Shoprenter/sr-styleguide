<template>
  <v-row dense>
    <v-col cols="12" sm="3">
      <div class="admin-form-row">
        <div class="admin-form-row__label">
          <slot name="label">
            <v-label><span v-if="required" class="required-form-row">* </span>{{ label }}</v-label>
            <div class="help">
              {{ help }}
            </div>
          </slot>
        </div>
      </div>
    </v-col>
    <v-col cols="12" sm="4">
      <div class="admin-form-row__element">
        <slot />
      </div>
    </v-col>
    <v-col cols="5" class="d-none d-sm-block">
    </v-col>
  </v-row>
</template>

<script>

import './SrFormRow.scss'

export default {
    name: 'SrFormRow',
    props: {
        label: {
            type: String,
            required: false
        },
        help: {
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
