# Node Express TypeScript Starter

The main purpose of this repository is to show a good exaple application for writing Node code in TypeScript.

# Pre-reqs
To build and run this app locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/)

# Getting started
- Clone the repository
```
git clone --depth=1 git@github.com:BabenkoOleg/nodejs-express-typescript.git <project_name>
```
- Install dependencies
```
cd <project_name>
yarn
```

# Runningg

```
yarn build
yarn start
```

# Structure

| Name | Description |
| ------------------------ | ---------------------------------------------------------------------------------------------|
| **dist**                 | Contains the distributable (or output) from your TypeScript build. This is the code you ship |
| **node_modules**         | Contains all your npm dependencies                                                           |
| **src**                  | Contains your source code that will be compiled to the dist dir                              |
| **src/config**           | Passport authentication strategies and login middleware. Add other complex config code here  |
| **src/controllers**      | Controllers define functions that respond to various http requests                           |
| **src/models**           | Models definitions                                                                           |
| **src**/server.ts        | Entry point to your express app                                                              |
| package.json             | File that contains npm dependencies                                                          |
| tsconfig.json            | Config settings for compiling server code written in TypeScript                              |
| tslint.json              | Config settings for TSLint code style checking                                               |


# Scripts

| Npm Script | Description |
| ------------------------- | --------------------------------------------------------------------------------------------- |
| `start`                   | Does the same as 'npm run serve'. Can be invoked with `npm start`                             |
| `build`                   | Full build. Runs ALL build tasks (`build-ts`, `tslint`)                                       |
| `serve`                   | Runs node on `dist/server.js` which is the apps entry point                                   |
| `watch-node`              | Runs node with nodemon so the process restarts if it crashes. Used in the main watch task     |
| `watch`                   | Runs all watch tasks (TypeScript, Sass, Node). Use this if you're not touching static assets. |
| `build-ts`                | Compiles all source `.ts` files to `.js` files in the `dist` folder                           |
| `watch-ts`                | Same as `build-ts` but continuously watches `.ts` files and re-compiles when needed           |
| `tslint`                  | Runs TSLint on project files                                                                  |
| `debug`                   | Performs a full build and then serves the app in watch mode                                   |
| `serve-debug`             | Runs the app with the --inspect flag                                                          |
| `watch-debug`             | The same as `watch` but includes the --inspect flag so you can attach a debugger              |
