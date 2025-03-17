<template>
    <div class="page-layout--base" :class="modifiers">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'PageLayout',
    props: {
        slim: {
            required: false,
            type: Boolean,
            default: false
        }
    },
    computed: {
        modifiers () {
            return {
                'page-layout--slim': this.slim
            }
        }
    }
}
</script>
