<template>
  <div class="sr-multi-checkbox">
    <div class="checkbox-container" ref="checkboxWrapper">
      <template v-if="loading">
        <div class="preloader-container">
          <v-progress-circular
              class="text-center"
              color="primary"
              indeterminate
              size="38"
          />
        </div>
      </template>
      <template v-else>
        <slot name="checkboxes"/>
      </template>
    </div>
    <div class="multi-checkbox-actions">
      <sr-primary-button text data-test-id="selectAllCheckbox" @click="selectAllCheckboxes">
        {{ $vuetify.lang.t('$vuetify.selectAll') }}
      </sr-primary-button>
      <span class="multi-checkbox-separator">/</span>
      <sr-primary-button text data-test-id="unSelectAllCheckbox" @click="unSelectAllCheckboxes">
        {{ $vuetify.lang.t('$vuetify.clearAll') }}
      </sr-primary-button>
    </div>
  </div>
</template>

<script>
import { MultiCheckboxMixin } from './mixin/SrMultiCheckboxMixin';

export default {
  name: 'BaseMultiCheckbox',
  mixins: [MultiCheckboxMixin],
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>
