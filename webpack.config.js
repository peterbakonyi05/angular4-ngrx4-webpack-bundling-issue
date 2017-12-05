const fs = require('fs');
const path = require('path');

const { NamedModulesPlugin } = require('webpack');
const { AotPlugin } = require('@ngtools/webpack');

const nodeModules = path.join(process.cwd(), 'node_modules');
const realNodeModules = fs.realpathSync(nodeModules);
const genDirNodeModules = path.join(process.cwd(), 'src', '$$_gendir', 'node_modules');
const minimizeCss = false;
const baseHref = "";
const deployUrl = "";

module.exports = {
  "resolve": {
    "extensions": [
      ".ts",
      ".js"
    ],
    "modules": [
      nodeModules
    ],
    "symlinks": true
  },
  "entry": "./src/apps/app/main.ts",
  "output": {
    "path": path.join(process.cwd(), "dist"),
    "filename": "app.js"
  },
  "module": {
    "rules": [
      {
        "test": /\.ts$/,
        "loader": "@ngtools/webpack"
      }
    ]
  },
  "plugins": [
    new NamedModulesPlugin({}),
    new AotPlugin({
      "mainPath": "./src/apps/app/main.ts",
      "replaceExport": false,
      "exclude": [
        "node_modules"
      ],
      "tsConfigPath": "tsconfig.app.json",
      "skipCodeGeneration": true
    })
  ],
  "node": {
    "fs": "empty",
    "global": true,
    "crypto": "empty",
    "tls": "empty",
    "net": "empty",
    "process": true,
    "module": false,
    "clearImmediate": false,
    "setImmediate": false
  },
  "devServer": {
    "historyApiFallback": true
  }
};
