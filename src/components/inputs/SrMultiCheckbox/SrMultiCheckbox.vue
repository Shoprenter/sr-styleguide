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
import './SrMultiCheckbox.scss'
export default {
    name: 'SrMultiCheckbox',
    props: {
        loading: {
            type: Boolean,
            default: false
        }
    },
    emits: ['select-all', 'unselect-all'],
    methods: {
        async selectAllCheckboxes () {
            const wrapper = this.$refs.checkboxWrapper
            const checkboxes = wrapper.querySelectorAll('input[type="checkbox"]')

            for (const cb of checkboxes) {
                if (cb.getAttribute('aria-checked') !== 'true') {
                    cb.click()
                    await this.$nextTick()
                }
            }

            this.$emit('select-all')
        },
        async unSelectAllCheckboxes () {
            const wrapper = this.$refs.checkboxWrapper
            const checkboxes = wrapper.querySelectorAll('input[type="checkbox"]')

            for (const cb of checkboxes) {
                if (cb.getAttribute('aria-checked') === 'true') {
                    cb.click()
                    await this.$nextTick()
                }
            }

            this.$emit('unselect-all')
        }
    }
}
</script>
