
# request-timeout

  Like setTimeout() but with requestAnimationFrame()

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
