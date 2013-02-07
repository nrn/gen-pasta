// gen-pasta.js

function genPasta (opts) {
  // GENERAL Functions
  //
  function slice (ar, start, end) {
    return Array.prototype.slice.call(ar, start, end)
  }

  function log () {
    if (console && console.log) console.log(slice(arguments))
  }

  function combine (returned, added) {
    Object.keys(added).forEach(function (key) {
      returned[key] = added[key]
    })
    return returned
  }

  function last (item) {
    var tmp = list(item)
    if (tmp) return tmp[tmp.length - 1]
    return item
  }

  function first (item) {
    var tmp = list(item)
    if (tmp) return tmp[0]
    return item
  }
  
  function list (item) {
    if (typeof item === 'number') {
      return item.toString().split('').map(function (a) { return +a })
    }
    else if (typeof item === 'string') return item.split('')
    else if (Array.isArray(item)) return item
    else if (typeof item === 'object') return Object.keys(item)
  }

  function flatten (arr) {
    if (Array.isArray(arr)) return arr.map(flatten).join('')
    return '' + arr
  }

  return { log: log
    , l: log
    , last:last
    , first: first
    , list: list
    , flatten: flatten
    , slice: slice
    , combine: combine
    // Depricated names
    , arrify: slice
    }

}

if (module && module.exports) module.exports = genPasta

