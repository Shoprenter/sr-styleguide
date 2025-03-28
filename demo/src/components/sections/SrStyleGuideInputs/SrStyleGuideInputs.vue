<template>
  <div id="sr-style-guide-inputs">
    <div id="text-inputs" class="sg-block">
      <h4 class="text-h4">Text</h4>
      <sr-style-guide-item-row
          align="start"
          code="<sr-input-field type='text' hint='This is a hint'/>">
        <sr-input-field
            hint="This is a hint"
            type="text"
        />
      </sr-style-guide-item-row>
    </div>
    <div class="sg-block">
      <h4 class="text-h4">Number</h4>
      <sr-style-guide-item-row
          align="start"
          code="<sr-input-field type='number' hint='This is a hint'/>">
        <sr-input-field
            hint="This is a hint"
            type="number"
        />
      </sr-style-guide-item-row>
    </div>
    <div class="sg-block">
      <h4 class="text-h4">Error</h4>
      <sr-style-guide-item-row
          align="start"
          code="<sr-input-field type='text' error-messages='Here is an error'/>">
        <sr-input-field
            error-messages="Here is an error"
            type="text"
        />
      </sr-style-guide-item-row>
    </div>
    <div id="select-inputs" class="sg-block">
      <h4 class="text-h4">Select</h4>
      <sr-style-guide-item-row
          align="start"
          code="&lt;sr-select :items=&quot;[{text: 'Example 1', value: 1}, {text: 'Example 2', value: 2}]&quot; :placeholder='--- Kérlek válassz ---' /&gt;">
        <sr-select
            :items="[{text: 'Example 1', value: 1}, {text: 'Example 2', value: 2}]"
            :placeholder="'--- Kérlek válassz ---'"
        />
      </sr-style-guide-item-row>
    </div>
    <div id="checkbox-inputs" class="sg-block">
      <h4 class="text-h4">Checkbox</h4>
      <sr-style-guide-item-row class="mb-4" code='<sr-checkbox label="This is a checkbox." />'>
        <sr-checkbox label="This is a checkbox."/>
      </sr-style-guide-item-row>

      <sr-style-guide-item-row code='<sr-checkbox disabled label="This is a disabled checkbox." />'>
        <sr-checkbox disabled label="This is a disabled checkbox."/>
      </sr-style-guide-item-row>
    </div>
    <div id="switch-inputs" class="sg-block">
      <h4 class="text-h4">Switch</h4>
      <sr-style-guide-item-row class="mb-4" code='<sr-switch v-model="switchValue"/>'>
        <sr-switch v-model="switchValue"/>
      </sr-style-guide-item-row>

      <sr-style-guide-item-row code='<sr-switch dense v-model="switchValue"/>'>
        <sr-switch dense v-model="switchValueDense"/>
      </sr-style-guide-item-row>
    </div>
    <div id="radio-inputs" class="sg-block">
      <h4 class="text-h4">Radio</h4>
      <sr-style-guide-item-row class="mb-4" code='     <sr-radio-group v-model="radioGroupValue">
          <sr-radio value="1" label="Option 1"/>
          <sr-radio value="2" label="Option 2"/>
          <sr-radio disabled value="3" label="Option 3"/>
        </sr-radio-group>'>
        <sr-radio-group v-model="radioGroupValue">
          <sr-radio value="1" label="Option 1"/>
          <sr-radio value="2" label="Option 2"/>
          <sr-radio disabled value="3" label="Option 3"/>
        </sr-radio-group>
      </sr-style-guide-item-row>
    </div>
    <div id="date-picker-input" class="sg-block">
      <h4 class="text-h4">Date Picker</h4>
      <sr-style-guide-item-row class="mb-4" code='<sr-date-picker v-model="date"/>
// accepts ISO 8601 date strings (YYYY-MM-DD)
// date: new Date().toISOString().substr(0, 10)'>
        <sr-date-picker v-model="date"/>
      </sr-style-guide-item-row>
    </div>
  </div>
</template>

<script>
export default {
    name: 'StyleGuideInputs',
    data () {
        return {
            switchValue: true,
            switchValueDense: false,
            radioGroupValue: '1',
            date: new Date().toISOString().substr(0, 10)
        }
    }
}
</script>
