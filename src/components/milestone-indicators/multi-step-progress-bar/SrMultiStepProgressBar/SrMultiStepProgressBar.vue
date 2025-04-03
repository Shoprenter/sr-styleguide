<template>
  <div class="sr-multi-step-progress-bar" v-bind="$attrs" v-on="$listeners">
    <slot />
  </div>
</template>

<script>
export default {
    name: 'SrMultiStepProgressBar',
    inheritAttrs: false
}
</script>
