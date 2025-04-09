export const MultiCheckboxMixin = {
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
