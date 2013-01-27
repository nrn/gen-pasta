// gen-pasta.js

function genPasta (opts) {
  // GENERAL Functions
  //
  function arrify (arr) {
    return Array.prototype.slice.apply(arr)
  }

  function log () {
    if (console && console.log) console.log(arrify(arguments))
  }

  function combine (returned, added) {
    Object.keys(added).forEach(function (key) {
      returned[key] = added[key]
    })
    return returned
  }

  function last(item) {
    var num = false
    if (typeof item === 'number') return +item.toString().split('').pop()
    if (typeof item === 'string') return item.split('').pop()
    if (Array.isArray(item)) return item.pop()
    if (typeof item === 'object') return Object.keys(item).pop()
    return item

  }

  return { log: log
    , l: log
    , last:last
    , arrify: arrify
    , combine: combine
    }

}

if (module && module.exports) module.exports = genPasta

