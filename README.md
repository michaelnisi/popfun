# popfun - pop fun off

The popfun [Node.js](http://nodejs.org/) module removes the last element from an array if it is a function and returns it. This can be handy to fetch the callback from an arguments array (`[err, a1, a2, an, cb]`). 

[![Build Status](https://secure.travis-ci.org/michaelnisi/popfun.png)](http://travis-ci.org/michaelnisi/popfun) [![David DM](https://david-dm.org/michaelnisi/popfun.png)](https://david-dm.org/michaelnisi/popfun)

## Usage
```js
var popfun = require('popfun')

function echo () {
  var args = Array.prototype.slice.call(arguments)
    , callback = popfun(args)
  
  if (callback) callback(null, args.join(' '))
}

echo('hey', 'you', function (err, msg) {
  console.log(msg)
})
```
## API

### popfun(args)

- `args` Object to pop if last element is of type 'function'

This function can take any type—if it receives an array, it pops the last element off it and returns the element, else it returns null.

## Installation

[![npm](https://nodei.co/npm/popfun.png?compact=true)](https://npmjs.org/package/popfun) 

## License

[MIT License](https://raw.github.com/michaelnisi/popfun/master/LICENSE)
