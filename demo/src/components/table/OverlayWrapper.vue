<template>
    <div class="admin-overlay-wrapper">
        <slot />
        <v-overlay
            color="white"
            absolute
            :value="value"
            :z-index="2"
        >
        </v-overlay>
    </div>
</template>

<script>
export default {
    name: 'OverlayWrapper',
    props: {
        value: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
    .admin-overlay-wrapper {
        position: relative;
    }
</style>
