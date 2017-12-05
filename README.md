# Angular 4, ngrx, TS bundling issue



## General info

When using `@angular` v4, `@ngrx` v4 and have the following config in `tsconfig.json`:
```json
"paths": {
  "*": [
    "./node_modules/*"
  ]
}
```
webpack will generate incorrect output because it bundles `@ngrx/store` twice in the dist folder (correct ES5 bundle and the ES6 code from src folder).

Open the generated [app.js](https://raw.githubusercontent.com/peterbakonyi05/angular4-ngrx4-webpack-bundling-issue/master/dist/app.js) and search for `class Store` and `Store.prototype`. You will see that the same code is bundled twice.

Then the app will fail with this error message:

```
Unhandled Promise rejection: No provider for Store! ; Zone: ; Task: Promise.then ; Value: Error: No provider for Store!
```

Reason: the class will be registered to the DI but `EffectsModule` will try to get the `Store` by using the ES5 function as the token.

The issue does not happen when using Angular 5 even if `paths` config is specified in tsconfig.

## Installation

1. Istall [Node.js](https://nodejs.org/en/download) LTS version
2. `npm i` in the application root
3. `npm start` to generate the dist folder

