<template>
  <v-row :align="align" no-gutters class="style-guide-row">
    <v-col cols="auto" class="element-container">
      <slot/>
    </v-col>
    <v-col class="code-container">
      <sr-code-block :code="code"/>
      <div class="flex">
        <v-btn icon class="copy-button ml-2" color="primary" @click="copyCode">
          <sr-duplicate-icon size="20"/>
        </v-btn>

        <transition name="fade">
          <span class="copied-text" v-if="copied">Másolva!</span>
        </transition>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import './SrStyleGuideItemRow.scss'

export default {
    data () {
        return {
            copied: false
        }
    },
    props: {
        code: {
            type: String,
            required: true
        },
        align: {
            type: String,
            default: 'center'
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
