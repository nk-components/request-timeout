/*global describe, it */
'use strict';

var assert = require('assert');
var requestTimeout = require('request-timeout');

describe('request-interval', function() {
  it('should apply a context', function(done) {
    this.timeout(20);

    var ctx = {foo: 'bar'};
    requestTimeout(10, function() {
      assert(this.foo === 'bar');
      done();
    }, ctx);
  });

  it('should be executed after 10ms', function(done) {
    this.timeout(20);

    var start = Date.now();
    requestTimeout(10, function() {
      var delta = Date.now() - start;
      assert(delta >= 10 && delta < 25);
      done();
    });
  });

  it('should be cleared', function(done) {
    this.timeout(30);

    var numCalls = 0;
    var id = requestTimeout(10, function() {
      numCalls++;
    });

    requestTimeout.clear(id);

    setTimeout(function() {
      assert(numCalls === 0);
      done();
    }, 20);
  });
});
