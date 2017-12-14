# nodom-global [![travis][travis-image]][travis-url] [![coveralls][coveralls-image]][coveralls-url] [![npm][npm-image]][npm-url]

[travis-image]: https://img.shields.io/travis/RauliL/nodom-global/master.svg
[travis-url]: https://travis-ci.org/RauliL/nodom-global
[coveralls-image]: https://coveralls.io/repos/github/RauliL/nodom-global/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/RauliL/nodom-global
[npm-image]: https://img.shields.io/npm/v/nodom-global.svg
[npm-url]: https://npmjs.org/package/nodom-global

Similarly as [jsdom-global], **nodom-global** enables DOM in Node.js, except
that it uses [NO:DOM] library instead of [jsdom]. It's useful for running test
cases made against [RE:DOM] libraries.

It injects `document`, `window` and other DOM API found in NO:DOM into your
Node.js environment.

## Installation

**nodom-global** requires [NO:DOM].

```bash
npm install --save-dev nodom nodom-global
```

## Usage with Mocha

Run [Mocha] with `-r nodom-global/register` command line argument to
automatically register NO:DOM into your Node.js environment.

```bash
mocha -r nodom-global/register test.js
```

[NO:DOM]: https://github.com/redom/nodom
[RE:DOM]: https://redom.js.org/
[jsdom-global]: https://github.com/rstacruz/jsdom-global
[jsdom]: https://github.com/tmpvar/jsdom
[Mocha]: https://mochajs.org/
