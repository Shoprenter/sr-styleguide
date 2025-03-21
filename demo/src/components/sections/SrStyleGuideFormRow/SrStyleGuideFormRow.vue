<template>
  <div class="sg-subsection">
      <sr-form-row label="FormRow">
      </sr-form-row>
  </div>
</template>

<script>

import SrStyleGuideItemRow from '../../SrStyleGuideItemRow/SrStyleGuideItemRow.vue'
import SrFormGroup from '../../../../../src/components/form/form-group/SrFormGroup.vue'

export default {
    name: 'SrStyleGuideFormRow',
    components: { SrFormGroup, SrStyleGuideItemRow }
}
</script>
