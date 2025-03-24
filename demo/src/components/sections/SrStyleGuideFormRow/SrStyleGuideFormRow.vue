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
      <div class="flex">
        <v-btn icon class="copy-button ml-2" color="primary" @click="copyCode">
          <sr-duplicate-icon size="20"/>
        </v-btn>
        <transition name="fade">
          <span class="copied-text" v-if="copied">Másolva!</span>
        </transition>
      </div>
    </v-row>
  </div>
</template>

<script>

import '../../SrStyleGuideItemRow/SrStyleGuideItemRow.scss'

export default {
  name: 'SrStyleGuideFormRow',
  data () {
    return {
      copied: false
    }
  },
  methods: {
    copyCode () {
      navigator.clipboard.writeText(this.code)
      this.copied = true
      setTimeout(() => {
        this.copied = false
      }, 600)
    }
  }
}
</script>
