# SR Styleguide

## Környezet

- **Node**: 22
- **Npm**: 10


## Használat

Ahhoz, hogy a Styleguide komponenseit a saját Vue alkalmazásunkban használhassuk:

- hozzá kell adnunk az alkalmazáshoz a komponenseket
```javascript
import Vue from 'vue'
import { SrStyleguideComponents } from '@shoprenter/sr-styleguide'

Vue.use(SrStyleguideComponents)
```

- az alkalmazást a Styleguide felkonfigurált Vuetify példányával kell inicializálnunk
```javascript
import Vue from 'vue'
import {SrStyleguide} from '@shoprenter/sr-styleguide'

const app = new Vue({
    vuetify: SrStyleguide,
    render: h => h(App)
})
```
- be kell töltenünk az oldalra a Styleguide stílusfájlt

```javascript
import '@shoprenter/sr-styleguide/dist/stylesheet/sr-styleguide.css'
```
