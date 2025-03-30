<template>
  <div class="sr-progress-bar-step"
       :class="{completed: !selected && completed, selected: selected}"
       v-bind="$attrs"
       v-on="$listeners"
  >
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
        selected: {
            type: Boolean,
            default: false
        }
    }
}
</script>
