<template>
  <v-row :align="align" no-gutters class="style-guide-row">
    <v-col cols="auto" class="element-container">
      <slot/>
    </v-col>
    <v-col>
      <demo-code-block :code="code"/>
    </v-col>
  </v-row>
</template>

<script>
import './DemoItemRow.scss'

export default {

    props: {
        code: {
            type: String,
            required: true
        },
        align: {
            type: String,
            default: 'center'
        }
    }
}
</script>
