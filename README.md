# popfun - pop last item of array, if it is a function

The popfun node module pops and returns the last item of a given array, if its type is 'function'; for example, the callback in an arguments array.

## Usage

    var popfun = require('popfun')

    function echo () {
      var args = Array.prototype.slice.call(arguments)
        , callback = popfun(args)
      
      if (callback) callback(null, args.join(' ')])
    }
    
    echo('hey', 'you', function (err, msg) {
      console.log(msg)
    })

## Installation

Install with [npm](http://npmjs.org/):

    npm install popfun

## License

[MIT License](https://raw.github.com/michaelnisi/popfun/master/LICENSE)
