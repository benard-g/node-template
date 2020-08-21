# node-template

## Installation

### Prerequisites

Before going through the installation steps described in this template,
make sure that you have the following installed on your local machine :

- [nvm](https://github.com/nvm-sh/nvm) : to manage your Node.js environment
- [yarn](https://yarnpkg.com) : to install the project's dependencies

### Setup

#### Node

First, we install the latest stable Node.js version :

```sh
# Install the LTS version, see https://nodejs.org
nvm install --lts

# Freeze the version
node --version > .nvmrc
npx json -I -f package.json -e "this.engines.node=\"$(node --version)\""
```

#### Typescript

Then, we install [Typescript](https://www.typescriptlang.org) :

```sh
# Install typescript
yarn add -D typescript @types/node

# Install tsc-watch to enable hot-reloading in development mode
yarn add -D tsc-watch
```

You can now build and run the project using the following commands :
- `yarn build` : will transpile the typescript sources into javascript
- `yarn start` : will execute the generated javascript code
- `yarn dev` : starts the "dev mode", it watches the files and restarts on every change

At this point, we have a working typescript project. To improve the development experience, we will also configure a few more utilities.

#### Linter

We will use a combination of [eslint](https://eslint.org) and [prettier](https://prettier.io) :

```sh
# Install eslint with typescript support
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

# Install prettier and plug it to eslint
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

You can now run the linter using the following commands :
- `yarn test:lint` : will run the linter and report every errors
- `yarn test:lint --fix` : will fix the errors that can be "auto-fixed"

#### Automated tests

We will use [jest](https://jestjs.io) :

```sh
# Install jest with typescript support
yarn add -D jest @types/jest ts-jest
```

Once jest is installed, you can run the automated tests located in the `test` folder using the following commands :
- `yarn test:jest` : will run all the tests and generate a coverage report
- `yarn jest <pattern>` : will execute all of the test files matching the provided pattern

You can also run all of the tests (build + linter + automated tests) using the following command. It can be useful in your CI :
- `yarn test`
