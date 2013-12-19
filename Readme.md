
# request-timeout

  Like setTimeout() but with requestAnimationFrame()

  > setTimeout doesn’t take into account what else is happening in the browser.  
  > [Source](http://creativejs.com/resources/requestanimationframe/)
  
  You can also find `requestInterval` component [here](https://github.com/nk-components/request-interval).
  
## Installation

  Install with [component(1)](http://component.io):

    $ component install nk-components/request-timeout

## API

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

## License

  MIT
  
  Inspired by [Joe Lambert's Gist](https://gist.github.com/joelambert/1002116#file-requesttimeout-js).
