# join-and-shorten
Join and shorten strings with priorities

[![Build Status](https://travis-ci.org/perry-mitchell/join-and-shorten.svg?branch=master)](https://travis-ci.org/perry-mitchell/join-and-shorten)

## About

This package was designed to shorten concatenated strings for use as IDs. It allows the specification of priorities for determining which items to remove from the string when shortening to fit a desired maximum length.

## Installation

Simply install it as a dependency using npm:

```shell
npm install join-and-shorten --save
```

## Usage

Usage is quite simple - to simply join items, you could use the following:

```javascript
const join = require("join-and-shorten");

join(["one", "two", "three"]); // "one_two_three"
```

_Notice that underscores are the default joiner of strings._

You can also customise the joining character and maximum length:

```javascript
join(["one", "two", "three"], "~", 9); // "one~two"
```

Or you can give priorities to the function so that it knows which items to strip:

```javascript
join([
    ["one", 2],
    ["two", 1],
    ["three", 3]
], "_", 11); // "one_three"
```

## Tests

Run the tests by executing `npm test`.
