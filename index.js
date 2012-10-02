// popfun - pop array, if last element is function

module.exports = popfun

function popfun (args) {
  if (!args || !args.length) return null
  
  if (typeof args[args.length - 1] === 'function') {
    return args.pop()
  }

  return null
}
