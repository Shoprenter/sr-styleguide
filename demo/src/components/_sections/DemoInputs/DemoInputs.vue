<template>
  <div id="sr-style-guide-inputs">
    <div id="checkbox-inputs" class="sg-block">
      <h4 class="text-h4">Checkbox</h4>
      <demo-item-row class="mb-4" code='<sr-checkbox v-model="checkboxValue" label="This is a checkbox." />'>
        <sr-checkbox label="This is a checkbox." v-model="checkboxValue"/>
      </demo-item-row>
      <demo-item-row code='<sr-checkbox disabled label="This is a disabled checkbox." />'>
        <sr-checkbox disabled label="This is a disabled checkbox."/>
      </demo-item-row>
      <div class="pt-5">
        Debug checkboxValue: {{ checkboxValue }}
      </div>
    </div>
    <div id="date-picker-input" class="sg-block">
      <h4 class="text-h4">Date Picker</h4>
      <demo-item-row class="mb-4" code='<sr-date-picker v-model="date"/>
// accepts ISO 8601 date strings (YYYY-MM-DD)
// date: new Date().toISOString().substring(0, 10)'>
        <sr-date-picker v-model="date"/>
      </demo-item-row>
    </div>
    <div id="number-input" class="sg-block">
      <h4 class="text-h4">Number</h4>
      <demo-item-row
          align="start"
          code="<sr-input-field type='number' hint='This is a hint'/>">
        <sr-input-field
            hint="This is a hint"
            type="number"
        />
      </demo-item-row>
    </div>
    <div id="multi-checkbox-inputs" class="sg-block">
      <h4 class="text-h4">Multi Checkbox</h4>
      <p>
        Use this component when the options require unique behavior—for example, if some options should not be selectable, must always be selected, or if selecting certain items should trigger additional events or logic.
      </p>
      <v-row>
        <v-col>
          <sr-multi-checkbox :loading="false">
            <sr-array-checkbox
                :model-value="selectedOptions"
                label="Option 1 (Disabled)"
                @change:modelValue="selectedOptions = $event"
                disabled="disabled"
                :checkbox-value="1"/>
            <sr-array-checkbox
                :model-value="selectedOptions"
                label="Option 2 (Aways selected)"
                @change:modelValue="selectedOptions = $event"
                disabled="disabled"
                :checkbox-value="2"/>
            <sr-array-checkbox
                :model-value="selectedOptions"
                label="Option 3"
                @change:modelValue="selectedOptions = $event"
                :checkbox-value="3"/>
          </sr-multi-checkbox>
        </v-col>
        <v-col>
          Selected options debug: {{ selectedOptions }}
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <demo-code-block code='<sr-multi-checkbox :loading="false">
    <sr-array-checkbox
        :model-value="selectedOptions"
        label="Option 1 (Disabled)"
        @change:modelValue="selectedOptions = $event"
        disabled="disabled"
        :checkbox-value="1"/>
    <sr-array-checkbox
        :model-value="selectedOptions"
        label="Option 2 (Aways selected)"
        @change:modelValue="selectedOptions = $event"
        disabled="disabled"
        :checkbox-value="2"/>
    <sr-array-checkbox
        :model-value="selectedOptions"
        label="Option 3"
        @change:modelValue="selectedOptions = $event"
        :checkbox-value="3"/>
 </sr-multi-checkbox>'/>
        </v-col>
        <v-col cols="6">
          <demo-code-block language="JavaScript" code="data () {
      return {
          selectedOptions: [2, 3]
      }
}"/>
        </v-col>
      </v-row>
    </div>
    <div id="radio-inputs" class="sg-block">
      <h4 class="text-h4">Radio</h4>
      <demo-item-row class="mb-4" code='<sr-radio-group v-model="radioGroupValue">
    <sr-radio value="1" label="Option 1"/>
    <sr-radio value="2" label="Option 2"/>
    <sr-radio disabled value="3" label="Option 3"/>
 </sr-radio-group>'>
        <sr-radio-group v-model="radioGroupValue">
          <sr-radio value="1" label="Option 1"/>
          <sr-radio value="2" label="Option 2"/>
          <sr-radio disabled value="3" label="Option 3"/>
        </sr-radio-group>
      </demo-item-row>
      <p>
        Debug radioGroupValue: {{ radioGroupValue }}
      </p>
    </div>
    <div id="select-inputs" class="sg-block">
      <h4 class="text-h4">Select</h4>
      <demo-item-row
          align="start"
          code="&lt;sr-select :items=&quot;[{text: 'Example 1', value: 1}, {text: 'Example 2', value: 2}]&quot; placeholder='--- Kérlek válassz ---' /&gt;">
        <sr-select
            :items="[{text: 'Example 1', value: 1}, {text: 'Example 2', value: 2}]"
            :placeholder="'--- Kérlek válassz ---'"
        />
      </demo-item-row>
    </div>
    <div id="simple-multi-checkbox-inputs" class="sg-block">
      <h4 class="text-h4">Simple Multi Checkbox</h4>
      <p>
        Use this component when you only need to list the available options without requiring any special logic or custom behavior.
      </p>
      <v-row>
        <v-col>
          <sr-simple-multi-checkbox
              :loading="false"
              :multi-checkbox-options="multiCheckboxOptions"
              v-model="selectedSimpleOptions">
          </sr-simple-multi-checkbox>
        </v-col>
        <v-col>
          Selected options debug: {{ selectedSimpleOptions }}
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <demo-code-block code='<sr-simple-multi-checkbox
      :loading="false"
      :multi-checkbox-options="multiCheckboxOptions"
      v-model="selectedOptions">
 </sr-simple-multi-checkbox>'/>
        </v-col>
        <v-col cols="6">
          <demo-code-block language="JavaScript" code="data () {
      return {
          multiCheckboxOptions: [
            {label: 'Option 1', value: 1},
            {label: 'Option 2', value: 2},
            {label: 'Option 3', value: 3},
            {label: 'Option 4', value: 4},
            {label: 'Option 5', value: 5},
          ],
          selectedOptions: [2, 3]
      }
}"/>
        </v-col>
      </v-row>
    </div>
    <div id="switch-inputs" class="sg-block">
      <h4 class="text-h4">Switch</h4>
      <demo-item-row class="mb-4" code='<sr-switch v-model="switchValue"/>'>
        <sr-switch v-model="switchValue"/>
      </demo-item-row>

      <demo-item-row code='<sr-switch dense v-model="switchValue"/>'>
        <sr-switch dense v-model="switchValueDense"/>
      </demo-item-row>
    </div>
    <div id="text-area-input" class="sg-block">
      <h4 class="text-h4">Textarea</h4>
      <demo-item-row
          align="start"
          code='<sr-textarea hint="This is a hint" />'>
        <sr-textarea hint="This is a hint" />
      </demo-item-row>
    </div>
    <div id="text-input" class="sg-block">
      <h4 class="text-h4">Text</h4>
      <demo-item-row
          align="start"
          code="<sr-input-field type='text' hint='This is a hint'/>">
        <sr-input-field
            :max-width="100"
            hint="This is a hint"
            type="text"
        />
      </demo-item-row>
    </div>
    <div class="sg-block">
      <h4 class="text-h4">Error</h4>
      <demo-item-row
          align="start"
          code="<sr-input-field type='text' error-messages='Here is an error'/>">
        <sr-input-field
            error-messages="Here is an error"
            type="text"
        />
      </demo-item-row>
    </div>
  </div>
</template>

<script>
export default {
    name: 'DemoInputs',
    data () {
        return {
            switchValue: true,
            switchValueDense: false,
            radioGroupValue: '1',
            checkboxValue: false,
            date: new Date().toISOString().substring(0, 10),
            multiCheckboxOptions: [
                { label: 'Option 1', value: 1 },
                { label: 'Option 2', value: 2 },
                { label: 'Option 3', value: 3 },
                { label: 'Option 4', value: 4 },
                { label: 'Option 5', value: 5 }
            ],
            selectedSimpleOptions: [2, 3],
            selectedOptions: [2, 3]
        }
    }
}
</script>
