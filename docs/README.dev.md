# Fejlesztői dokumentáció


## Fejlesztés

Devszervert az `npm run serve` paranccsal tudsz indítani, ez valós időben frissíti is a látható eredményt a fájlváltozások alapján.

A devszerver a `http://localhost:8090/demo/` url-en lesz látható.

Ahhoz, hogy a módosítások bekerüljenek a csomag stylesheet-jébe és a demo-ban is láthatóak legyenek azoknak, akik használják a csomagot, futtatnunk kell az `npm run build` parancsot, miután elvégeztük a módosításokat.
