<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/angular-material-extensions/core/master/demo/src/assets/logo.svg">
</p>

# core - Set of components, directives and services to boost the app development with angular material 2

[![npm version](https://badge.fury.io/js/core.svg)](https://badge.fury.io/js/core),
[![Build Status](https://travis-ci.org/angular-material-extensions/core.svg?branch=master)](https://travis-ci.org/angular-material-extensions/core)
[![Coverage Status](https://coveralls.io/repos/github/angular-material-extensions/core/badge.svg?branch=master)](https://coveralls.io/github/angular-material-extensions/core?branch=master)
[![dependency Status](https://david-dm.org/angular-material-extensions/core/status.svg)](https://david-dm.org/angular-material-extensions/core)
[![devDependency Status](https://david-dm.org/angular-material-extensions/core/dev-status.svg?branch=master)](https://david-dm.org/angular-material-extensions/core#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/angular-material-extensions/core.svg)](https://greenkeeper.io/)

## Demo

View all the directives in action at https://angular-material-extensions.github.io/core

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `core` via:
```shell
npm install --save core
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `core`:
```js
map: {
  'core': 'node_modules/core/bundles/core.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from 'core';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from 'core';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from 'core';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2018 Anthony Nahas. Licensed under the MIT License (MIT)

