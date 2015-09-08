var popfun = require('popfun')

function echo () {
  var args = Array.prototype.slice.call(arguments)
  var callback = popfun(args)
  if (callback) callback(null, args.join(' '))
}

echo('hey', 'you', function (er, msg) {
  if (er) throw er
  console.log(msg)
})
