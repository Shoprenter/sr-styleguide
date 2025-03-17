<template>
    <v-switch
        :input-value="value"
        :label="getLabel"
        :ripple="false"
        hide-details
        inset
        v-bind="$attrs"
        @change="$emit('input', $event)"
    />
</template>

<script>
export default {
    name: 'SrSwitch',
    props: {
        value: {
            type: [Boolean, Number],
            required: true
        }
    },
    computed: {
        getLabel () {
            return this.value ? this.translate('yes') : this.translate('no')
        }
    }
}
</script>
