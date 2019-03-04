# Encryptico

[![Greenkeeper badge](https://badges.greenkeeper.io/kognise/encryptico.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/kognise/encryptico.svg?branch=master)](https://travis-ci.org/kognise/encryptico)
[![Current Version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)](https://github.com/kognise/encryptico)

Easy-peasy encryption, decryption, and signing using a simple, beautiful web interface and top-of-the-line cryptography techniques.

**Although this is a fun project and it still works, I am not maintaining this any more and probably won't respond to any issues or pull requests. Feel free to steal any of the code.**

## Table of Contents

* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Running / Development](#running---development)
  + [Running Tests](#running-tests)
  + [Linting](#linting)
  + [Building](#building)
* [Electron](#electron)
  + [Running / Development](#running---development-1)
  + [Running Tests](#running-tests-1)
  + [Building](#building-1)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)

## Installation

* `npm install -g ember-cli`
* `git clone https://github.com/kognise/encryptico.git`
* `cd encryptico`
* `npm install`

## Running / Development

* `npm start`
* Visit the app at [localhost:4200](http://localhost:4200)
* Visit the tests at [localhost:4200/tests](http://localhost:4200/tests)

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lintjs`
* `npm run lintjs -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Electron

Encryptico supports building a standalone application using Electron and a wonderful package called `ember-electron`.

### Running / Development

* It's very simple. Just run...
* `ember electron`
* ...and the app will start!

### Running Tests

* `ember electron:test`
* `ember electron:test --server` (for live reloading)

### Building

* `ember electron:package`
* Output will be in the `electron-out` folder
