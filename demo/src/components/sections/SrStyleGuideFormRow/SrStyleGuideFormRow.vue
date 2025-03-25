<template>
  <div class="sg-subsection">
    <v-row class="style-guide-row" no-gutters>
      <sr-form-row help="This is the help text" label="This is the input label" required>
        <sr-input-field type="text"></sr-input-field>
      </sr-form-row>
    </v-row>
    <v-row class="code-container">
      <sr-code-block code='<sr-form-row
     label="This is the input label"
     help="This is the help text"
     required>
    <sr-input-field type="text"></sr-input-field>
 </sr-form-row>
'/>
    </v-row>
  </div>
</template>

<script>

import '../../SrStyleGuideItemRow/SrStyleGuideItemRow.scss'

export default {
    name: 'SrStyleGuideFormRow',
    inheritAttrs: false
}
</script>
