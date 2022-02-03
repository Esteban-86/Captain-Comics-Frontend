![WildCodeSchool](https://avatars.githubusercontent.com/u/8874047?s=100)

# Project 3 frontend structure

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

- [nodejs](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

## Install

```shell
npm install
npm start
```

## Build

```shell
npm install
npm run build
```

## Tools

### Eslint

[ESlint](https://eslint.org/) help you to find and fix problems in your JavaScript code.

You can launch eslint with :
```shell
npm run lint
```

Eslint is configured with [Husky](https://typicode.github.io/husky/#/) to be triggered in the `pre-commit` git hook.

To disable eslint alert on all reload, launch ReactJs with `DISABLE_ESLINT_PLUGIN` env variable:
```shell
DISABLE_ESLINT_PLUGIN=true npm start
```