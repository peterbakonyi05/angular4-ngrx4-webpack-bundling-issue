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

The issue does not happen when using Angular 5 even if `paths` config is specified in tsconfig.

## Installation

1. Istall [Node.js](https://nodejs.org/en/download) LTS version
2. 'npm i' in the application root
3. `npm start` to generate the dist folder

