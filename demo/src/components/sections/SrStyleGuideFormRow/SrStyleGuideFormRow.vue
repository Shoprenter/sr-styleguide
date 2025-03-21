<template>
  <div class="sg-subsection">
    <sr-form-group>
      <sr-form-row label="FormRow">
        <sr-primary-button>Teszt</sr-primary-button>
      </sr-form-row>
      <sr-primary-button>Teszt</sr-primary-button>

    </sr-form-group>
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
