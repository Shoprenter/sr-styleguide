<template>
  <div class="sg-subsection">
    <sr-style-guide-item-row
        class="mb-4"
        code="<sr-primary-button small>Primary Button</sr-primary-button>">
      <sr-primary-button small>Primary Button</sr-primary-button>
    </sr-style-guide-item-row>
    <sr-style-guide-item-row
        class="mb-4"
        code="<sr-primary-button>Primary Button</sr-primary-button>">
      <sr-primary-button>Primary Button</sr-primary-button>
    </sr-style-guide-item-row>
    <sr-style-guide-item-row
        class="mb-4"
        code="<sr-primary-button large>Primary Button</sr-primary-button>">
      <sr-primary-button large>Primary Button</sr-primary-button>
    </sr-style-guide-item-row>
    <sr-style-guide-item-row
        class="mb-4"
        code="<sr-delete-button small>Delete Button</sr-delete-button>">
      <sr-delete-button small>Delete Button</sr-delete-button>
    </sr-style-guide-item-row>
    <sr-style-guide-item-row
        class="mb-4"
        code="<sr-delete-button>Delete Button</sr-delete-button>">
      <sr-delete-button>Delete Button</sr-delete-button>
    </sr-style-guide-item-row>
    <sr-style-guide-item-row
        class="mb-4"
        code="<sr-delete-button large>Delete Button</sr-delete-button>">
      <sr-delete-button large>Delete Button</sr-delete-button>
    </sr-style-guide-item-row>
    <sr-style-guide-item-row
        class="mb-4"
        code="<sr-primary-button small outlined>Primary Button</sr-primary-button>">
      <sr-primary-button small outlined>Outlined Button</sr-primary-button>
    </sr-style-guide-item-row>
    <sr-style-guide-item-row
        class="mb-4"
        code="<sr-primary-button outlined>Primary Button</sr-primary-button>">
      <sr-primary-button outlined>Outlined Button</sr-primary-button>
    </sr-style-guide-item-row>
    <sr-style-guide-item-row
        class="mb-4"
        code="<sr-primary-button large outlined>Primary Button</sr-primary-button>">
      <sr-primary-button large outlined>Outlined Button</sr-primary-button>
    </sr-style-guide-item-row>
    <sr-style-guide-item-row
        class="mb-4"
        code="<sr-primary-button small text>Primary Button</sr-primary-button>">
      <sr-primary-button small text>Text Button</sr-primary-button>
    </sr-style-guide-item-row>
    <sr-style-guide-item-row
        class="mb-4"
        code="<sr-primary-button text>Primary Button</sr-primary-button>">
      <sr-primary-button text>Text Button</sr-primary-button>
    </sr-style-guide-item-row>
    <sr-style-guide-item-row
        class="mb-4"
        code="<sr-primary-button large outlined>Primary Button</sr-primary-button>">
      <sr-primary-button large text>Text Button</sr-primary-button>
    </sr-style-guide-item-row>
  </div>
</template>

<script>

import SrStyleGuideItemRow from '../../SrStyleGuideItemRow/SrStyleGuideItemRow.vue'

export default {
    name: 'SrStyleGuideButtons',
    components: { SrStyleGuideItemRow }
}
</script>
