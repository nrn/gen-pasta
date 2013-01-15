var p = require('../gen-pasta')()
  , test = require('tape')

test('General', function (t) {
  t.plan(2)

  t.doesNotThrow(p.log, 'Log does not throw')

  t.equal((function () {
      return p.arrify(arguments)
    })(1, 2, 3).join()
    , [1, 2, 3].join()
    , 'Turn array like objects into arrays'
  )
})

