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
        <sr-array-checkbox
            v-for="option in multiCheckboxOptions"
            :key="option.value"
            :label="option.label"
            :model-value="modelValue"
            @change:modelValue="modelValue = $event"
            :checkbox-value="option.value">
        </sr-array-checkbox>
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
export default {
  name: 'SrSimpleMultiCheckbox',
  model: {
    prop: 'value',
    event: 'input'
  },
  emits: ['input', 'select-all', 'unselect-all'],
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    value: {
      type: Array,
      default: () => []
    },
    multiCheckboxOptions: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    modelValue: {
      get() {
        return this.value;
      },
      set(newVal) {
        this.$emit('input', newVal);
      }
    }
  },
  methods: {
    async selectAllCheckboxes() {
      const wrapper = this.$refs.checkboxWrapper;
      const checkboxes = wrapper.querySelectorAll('input[type="checkbox"]');

      for (const cb of checkboxes) {
        if (cb.getAttribute('aria-checked') !== 'true') {
          cb.click();
          await this.$nextTick();
        }
      }

      this.$emit('select-all');
    },
    async unSelectAllCheckboxes() {
      const wrapper = this.$refs.checkboxWrapper;
      const checkboxes = wrapper.querySelectorAll('input[type="checkbox"]');

      for (const cb of checkboxes) {
        if (cb.getAttribute('aria-checked') === 'true') {
          cb.click();
          await this.$nextTick();
        }
      }

      this.$emit('unselect-all');
    }
  }
}
</script>
