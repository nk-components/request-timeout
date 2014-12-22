# request-timeout [![Build Status](https://travis-ci.org/nk-components/request-timeout.svg)](https://travis-ci.org/nk-components/request-timeout)

Like `setTimeout()` but using `requestAnimationFrame()`.

> `setTimeout` doesn’t take into account what else is happening in the browser.  
> [Source](http://creativejs.com/resources/requestanimationframe/)

You can also find `requestInterval` component [here](https://github.com/nk-components/request-interval).

## Installation

With [npm](http://npmjs.org) do:

```bash
$ npm install nk-request-timeout --save
```

Install with [component(1)](http://component.io):

```
$ component install nk-components/request-timeout
```

## API

```js
var requestTimeout = require('request-timeout');

requestTimeout(300, function() {
  // do something
});

var id = requestTimeout(300, function() {
  console.log('should not be executed');
});

setTimeout(function() {
  requestTimeout.clear(id);
}, 100);
```

## License

MIT

Inspired by [Joe Lambert's Gist](https://gist.github.com/joelambert/1002116#file-requesttimeout-js).
