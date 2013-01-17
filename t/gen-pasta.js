var p = require('../gen-pasta')()
  , test = require('tape')

test('General', function (t) {
  t.plan(6)

  t.doesNotThrow(p.log, 'Log does not throw')

  t.equal((function () {
      return p.arrify(arguments)
    })(1, 2, 3).join()
    , [1, 2, 3].join()
    , 'Turn array like objects into arrays'
  )

  t.equal(p.last([1, 2, 3]), 3, 'Last element')

  t.equal(p.last({ c: 3, a: 1, b: 2}), 'b', 'Last key')

  t.equal(p.last('asdf'), 'f', 'Last character')

  t.equal(p.last(1234), 4, 'Last diget')

})

