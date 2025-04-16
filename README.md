# @shoprenter/sr-styleguide

This package is a UI component library for the Shoprenter admin interface.

It provides a pre-configured Vuetify 2 instance and reusable Vuetify-based components designed to ensure a consistent look and feel across the Shoprenter admin interface.

## Features

- Pre-configured Vuetify 2.6.14 setup
- Vue 2 compatible
- Ready-to-use design components
- Custom SCSS/CSS design
- Easy integration with remote applications
- Supports full-page apps and embeddable modules

## Getting Started

### Requirements

- **Node.js:** 14.x (22.x for developing the styleguide itself)
- **npm:** 10.x
- **Vue:** 2.x
- **Vuetify:** 2.6.14 (comes bundled with the package)

### Installation

Install the styleguide package via npm:

```bash
npm install @shoprenter/sr-styleguide
```

### Usage

To use the styleguide components and styles in your Vue application:

1. **Import the component library and register it:**

```js
import Vue from 'vue'
import { SrStyleguideComponents } from '@shoprenter/sr-styleguide'

Vue.use(SrStyleguideComponents)
```

2. **Initialize your Vue app with the pre-configured Vuetify instance:**

```js
import Vue from 'vue'
import { SrStyleguide } from '@shoprenter/sr-styleguide'
import App from './App.vue'

new Vue({
  vuetify: SrStyleguide,
  render: h => h(App)
}).$mount('#app')
```

3. **Load the styleguide stylesheet:**

```js
import '@shoprenter/sr-styleguide/dist/stylesheet/sr-styleguide.css'
```

### Example: App Integration

Here is a simple example of how to use the styleguide in your Vue application:

```js
import Vue from 'vue'
import { SrStyleguide, SrStyleguideComponents } from '@shoprenter/sr-styleguide'
import App from './App.vue'

import '@shoprenter/sr-styleguide/dist/stylesheet/sr-styleguide.css'

Vue.use(SrStyleguideComponents)

export default function createApp() {
  return new Vue({
    vuetify: SrStyleguide,
    render: h => h(App)
  })
}
```

## Demo

The latest version's component & style demos and documentation can be viewed here:

https://styleguide.shoprenter.hu/

OR

You can find the detailed documentation and component demos for the given version inside the package itself:

```
/dist/demo/index.html
```

Open this file in a browser to explore the available components and their usage.

## Changelog

### [new] - published date
#### Added
- SrStandardLayout component
- Breadcrumbs from route parameters to layout containers
- Demo list page
- Language-aware default placeholder for SrSelect component
- SrSimpleTableFilterTd component to simplify the creation of filterable table columns
- Demo form page
- SrTextarea component
- SrFormDivider component
- Getting Started page

#### Fixed
- Resolved an issue where global `html` tag styles were not being applied correctly.
- Demo page menu is now scrollable and condensable
- Help button & breadcrumb container no longer takes up space when empty
- Style rule scope now includes package version
- SrEditIcon component now contains the correct icon
- SrFormRow now has properly applied bottom margin
- SrDatePicker is now clearable just like the other input components
- SrSwitch is able to display hint and validation errors and consequentially has the same layout as the other input components
- SrDatePicker now displays in localized language and format
- If an app-container component gets an id attribute, it applies properly and no longer breaks styling

#### Changed
- Updated margins for the SrHeading component
- Style adjustments to the SrSimpleTable component
- SrHeading now adds space between the header buttons


### [1.1.0] - 2025-04-09
#### Added
- Added new SrSimpleMultiCheckbox component for cases when only a straightforward listing of selectable options is required.

#### Fixed
- Changed the suboptimal ordering of some style rules in the stylesheet
- Removed unused style rules to make the stylesheet's size smaller
- Fixed SrCheckbox component to handle v-model correctly
- Fixed SrRadioGroup component to handle v-model correctly

#### Changed
- Updated the SrMultiCheckbox demo example to clearly demonstrate that individual checkbox options can implement custom behaviors, such as forced selection, disabled state, or triggering custom events.
- Vuetify dependency got constrained to version 2.6.14 specifically. Previously it defaulted to the latest package of version 2.

### [1.0.0] - 2025-04-04
#### Initial release
- Basic components and package functionality


## Contribution

This package is maintained by the Shoprenter team. 

---
