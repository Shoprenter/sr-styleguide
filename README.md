# @shoprenter/sr-styleguide

A shared component and style library for Shoprenter admin applications.

This package provides a preconfigured Vuetify instance and a set of reusable Vuetify 2 components designed to ensure a consistent look and feel across all remote applications built for the Shoprenter admin interface.

## Features

- Preconfigured Vuetify 2.6.14 setup
- Vue 2 compatible
- Ready-to-use design components
- Custom SCSS/CSS design system
- Easy integration with remote applications
- Supports full-page apps and embeddable modules

## Getting Started

### Requirements

- **Node.js:** 14.x (22.x for development)
- **npm:** 10.x
- **Vue:** 2.x
- **Vuetify:** 2.6.14 (bundled with the package)

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

2. **Initialize your Vue app with the preconfigured Vuetify instance:**

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

When building an application that uses the styleguide, you can create a Vue instance like this:

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

https://styleguide.shoprenter.hu/

OR

You can find detailed documentation and component demos inside the package:

```
/dist/demo/index.html
```

Open this file in a browser to explore the available components and their usage.

## Changelog

See [CHANGELOG.md](https://github.com/Shoprenter/sr-styleguide/blob/master/CHANGELOG.md) for the list of updates and changes.

## Contribution

This package is maintained by the Shoprenter team. 

---
