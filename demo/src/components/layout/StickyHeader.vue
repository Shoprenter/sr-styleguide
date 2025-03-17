<template>
    <div class="sticky-header__wrapper d-flex align-center" :class="stickyClass">
        <v-container class="admin-container" fluid>
            <div class="d-flex justify-space-between align-center">
                <h4>
                    <slot/>
                </h4>
                <div class="sticky-header__actions d-flex align-center">
                    <slot name="actions"></slot>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'StickyHeader',
    props: {
        activator: {
            type: String,
            required: false,
            default: '.admin-page-header'
        }
    },
    computed: {
        stickyClass () {
            return this.sticky
                ? 'sticky-header--visible'
                : null
        }
    },
    data () {
        return {
            sticky: false,
            observer: null
        }
    },
    methods: {
        showSticky (entries) {
            this.sticky = !entries[0].isIntersecting
        }
    },
    mounted () {
        this.observer = new IntersectionObserver(this.showSticky)
        const target = document.querySelector(this.activator)
        this.observer.observe(target)
    },
    destroyed () {
        this.observer.disconnect()
    }
}
</script>
