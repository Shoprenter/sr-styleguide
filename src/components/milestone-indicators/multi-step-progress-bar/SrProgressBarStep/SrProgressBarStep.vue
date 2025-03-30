<template>
  <div class="sr-progress-bar-step"
       :class="{completed: !active && completed, active: active}"
       v-bind="$attrs"
       v-on="$listeners">
    <slot />
  </div>
</template>

<script>
import './SrProgressBarStep.scss'
export default {
    name: 'SrProgressBarStep',
    inheritAttrs: false,
    props: {
        completed: {
            type: Boolean,
            default: false
        },
        active: {
            type: Boolean,
            default: false
        }
    }
}
</script>
