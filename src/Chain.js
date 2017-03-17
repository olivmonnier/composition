var Chain = function() {
  var _listeners = {}, _resultOfPreviousFunc = null, _self = this, _api = {}, _funcs = [], _errors = [];

  var on = function(type, listener) {
    if(!_listeners[type]) _listeners[type] = [];

    _listeners[type].push(listener);

    return _api;
  }

  var off = function(type, listener) {
    if(_listeners[type]) {
      var arr = [];

      _listeners[type].forEach(function(fn) {
        if(fn !== listener) arr.push(fn);
      });
      _listeners[type] = arr;
    }

    return _api
  }

  var dispatch = function(type, param) {
    if(_listeners[type]) {
      _listeners[type].forEach(function(fn) {
        fn(param, _api);
      });
    }
  }

  var run = function() {
    if(arguments.length > 0) {
      var element = null;
      _funcs = [].slice.call(arguments);

      element = _funcs.shift();
      if(typeof element === 'function') {
        element(_resultOfPreviousFunc, _api);
      } else if(typeof element === 'object' && element.length > 0) {
        var fn = element.shift();

        fn.apply(fn, element.concat([_api.next]));
      }
    } else {
      dispatch('done', _resultOfPreviousFunc);
    }
    return _api;
  }

  var next = function(res) {
    _resultOfPreviousFunc = res;
    run.apply(self, _funcs);
  }

  var error = function(err) {
    if(typeof err != 'undefined') {
      _errors.push(err);
      return _api;
    } else {
      return _errors;
    }
  }

  var process = function() {
    if(arguments.length > 0) {
      if(arguments.length === 2 && typeof arguments[0] === 'string' && typeof arguments[1] === 'function') {
        on.apply(self, arguments);
      } else {
        run.apply(self, arguments);
      }
    }
    return process;
  }

  _api = {
    on: on,
    off: off,
    next: next,
    error: error
  }

  return process;
}
