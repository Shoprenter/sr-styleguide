<template>
  <div>
    <div class="mb-10">
      <sr-style-guide-item-row
          align="start"
          code="<sr-input-field type='text' hint='This is a hint'/>">
        <sr-input-field
            type="text"
            hint="This is a hint"
        />
      </sr-style-guide-item-row>
    </div>
    <div class="mb-10">
      <sr-style-guide-item-row
          align="start"
          code="<sr-input-field type='number' hint='This is a hint'/>">
      <sr-input-field
          type="number"
          hint="This is a hint"
      />
      </sr-style-guide-item-row>
    </div>
    <div class="mb-10">
      <sr-style-guide-item-row
          align="start"
          code="<sr-input-field type='text' error-messages='Here is an error'/>">
      <sr-input-field
          type="text"
          error-messages="Here is an error"
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
