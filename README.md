# SR Styleguide

## Környezet

- **Node**: 22
- **Npm**: 10


## Használat

A Styleguide stílus szabályai csak a `#sr-styleguide` css selectoron belül lesznek érvényesek. A Styleguide-ot használó Vue alkalmazás szülő DOM elemének rendelkeznie kell ezzel az attribútummal.

Ahhoz, hogy a Styleguide komponenseit a saját Vue alkalmazásunkban használhassuk:

- hozzá kell adnunk az alkalmazáshoz a komponenseket
```javascript
import Vue from 'vue'
import { SrStyleguideComponents } from 'sr-styleguide'

Vue.use(SrStyleguideComponents)
```

- az alkalmazást a Styleguide felkonfigurált Vuetify példányával kell inicializálnunk
```javascript
import Vue from 'vue'
import {SrStyleguide} from 'sr-styleguide'

const app = new Vue({
    vuetify: SrStyleguide,
    render: h => h(App)
})
```
- be kell töltenünk az oldalra a Styleguide stílusfájlt

```javascript
import 'sr-styleguide/dist/stylesheet/sr-styleguide.css'
```

## Fejlesztés

Devszervert az `npm run serve` paranccsal tudsz indítani, ez valós időben frissíti is a látható eredményt a fájlváltozások alapján. 

A devszerver a `http://localhost:8090/demo/` url-en lesz látható.

Ahhoz, hogy a módosítások bekerüljenek a csomag stylesheet-jébe és a demo-ban is láthatóak legyenek azoknak, akik használják a csomagot, futtatnunk kell az `npm run build` parancsot, miután elvégeztük a módosításokat.
