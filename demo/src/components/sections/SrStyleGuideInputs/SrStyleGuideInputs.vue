<template>
  <div>
    <div class="sg-block">
      <h4>Text</h4>
      <sr-style-guide-item-row
          align="start"
          code="<sr-input-field type='text' hint='This is a hint'/>">
        <sr-input-field
            type="text"
            hint="This is a hint"
        />
      </sr-style-guide-item-row>
    </div>
    <div class="sg-block">
      <h4>Number</h4>
      <sr-style-guide-item-row
          align="start"
          code="<sr-input-field type='number' hint='This is a hint'/>">
        <sr-input-field
            type="number"
            hint="This is a hint"
        />
      </sr-style-guide-item-row>
    </div>
    <div class="sg-block">
      <h4>Error</h4>
      <sr-style-guide-item-row
          align="start"
          code="<sr-input-field type='text' error-messages='Here is an error'/>">
        <sr-input-field
            type="text"
            error-messages="Here is an error"
        />
      </sr-style-guide-item-row>
    </div>
    <div class="sg-block">
      <h4>Select</h4>
      <sr-style-guide-item-row
          align="start"
          code="&lt;sr-select :items=&quot;[{text: 'Example 1', value: 1}, {text: 'Example 2', value: 2}]&quot; :placeholder='--- Kérlek válassz ---' /&gt;">
        <sr-select
            :items="[{text: 'Example 1', value: 1}, {text: 'Example 2', value: 2}]"
            :placeholder="'--- Kérlek válassz ---'"
        />
      </sr-style-guide-item-row>
    </div>
  </div>
</template>

<script>

export default {
    name: 'StyleGuideInputs'

}
</script>
