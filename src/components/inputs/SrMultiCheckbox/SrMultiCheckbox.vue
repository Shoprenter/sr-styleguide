<template>
  <div>
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
        <slot/>
      </template>
    </div>
    <div class="multi-checkbox-actions">
      <sr-primary-button text small data-test-id="selectAllCheckbox" @click="selectAllCheckboxes()">
        {{ this.$vuetify.lang.t('$vuetify.selectAll') }}
      </sr-primary-button>
      <span class="multi-checkbox-separator">/</span>
      <sr-primary-button text small data-test-id="unSelectAllCheckbox" @click="unSelectAllCheckboxes()">
        {{ this.$vuetify.lang.t('$vuetify.clearAll') }}
      </sr-primary-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "SrMultiCheckbox",
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ["select-all", "unselect-all"],
  methods: {
    selectAllCheckboxes() {
      const wrapper = this.$refs.checkboxWrapper;
      const checkboxes = wrapper.querySelectorAll('input[type="checkbox"]');

      checkboxes.forEach(cb => {
        if (cb.getAttribute('aria-checked') !== 'true') {
          cb.click();
        }
      });

      this.$emit("select-all");
    },
    unSelectAllCheckboxes() {
      const wrapper = this.$refs.checkboxWrapper;
      const checkboxes = wrapper.querySelectorAll('input[type="checkbox"]');

      checkboxes.forEach(cb => {
        if (cb.getAttribute('aria-checked') === 'true') {
          cb.click();
        }
      });

      this.$emit("unselect-all");
    }
  }
}
</script>

<style scoped>
.checkbox-container > .preloader-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.checkbox-container {
  height: 100px;
  width: 400px;
  min-height: 100px;
  min-width: 400px;
  max-width: 600px;
  max-height: 500px;
  overflow-y: auto;
  resize: both;
  border-radius: 3px;
  border: 1px solid var(--sr-pale-gray);
  background-color: var(--sr-white);
  padding: 1em;
}

.multi-checkbox-actions {
  margin-top: 0.5em;
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-size: 14px;
}

.multi-checkbox-separator {
  color: var(--sr-primary);
}

</style>
