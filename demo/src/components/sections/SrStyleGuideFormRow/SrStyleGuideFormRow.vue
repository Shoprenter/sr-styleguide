<template>
  <div class="sg-subsection">
      <sr-form-row label="This is the input label" help="This is the help text" required>
          <sr-input-field type="text"></sr-input-field>
      </sr-form-row>
  </div>
</template>

<script>

import SrStyleGuideItemRow from '../../SrStyleGuideItemRow/SrStyleGuideItemRow.vue'

export default {
    name: 'SrStyleGuideFormRow',
    components: { SrStyleGuideItemRow }
}
</script>
