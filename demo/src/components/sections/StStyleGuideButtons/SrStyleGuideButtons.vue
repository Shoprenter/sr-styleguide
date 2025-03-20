<template>
  <div class="sg-subsection">
      <div>
        <div>
          <div >
            <sr-primary-button>Primary Button</sr-primary-button>
          </div>
          <sr-code-block :code="'<sr-primary-button>Primary Button</sr-primary-button>'"/>
        </div>
        <div>
          <div >
            <sr-delete-button>Delete Button</sr-delete-button>
          </div>
          <sr-code-block :code="'<sr-delete-button>Delete Button</sr-delete-button>'"/>
        </div>

      </div>
  </div>
</template>

<script>

export default {
    name: 'SrStyleGuideButtons'
}
</script>
