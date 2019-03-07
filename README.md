# [Rick and Morty React]![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Introduction

This SPA is a exercise for integrate the [Rick and Morty API](https://rickandmortyapi.com/) with a React project and other technologies.

## Requirements

Install global necessary packages:

- [yarn](https://yarnpkg.com/lang/en/)
- [standard](https://standardjs.com/)
- [prettier](https://prettier.io/docs/en/editors.html/) with IDE integration.

## Install

Install first time global packages:

```sh
$ yarn global add lerna
```

execute command:

```sh
$ yarn bootstrap
```

This command is for a new and clean installation, but first you must execute the `bootstrap` command:

```sh
$ yarn regenerate
```

## Structure

### storybook

React UI components Storybook showcase.

- For visualize the components library execute command:

```sh
$ yarn storybook
```

### ui-core

Centralized React UI components library for web project.

### web

SPA with React consuming the [Rick and Morty API](https://rickandmortyapi.com/).

- For visualize the SPA execute command:

```sh
$ yarn start
```
