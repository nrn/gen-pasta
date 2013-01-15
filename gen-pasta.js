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

  return { log: log
    , l: log
    , arrify: arrify
    }

}

if (module && module.exports) module.exports = genPasta

