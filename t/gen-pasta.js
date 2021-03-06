var p = require('../gen-pasta')()
  , test = require('tape')

test('General', function (t) {

  t.doesNotThrow(p.log, 'Log does not throw')

  t.same((function () {
      return p.slice(arguments)
    })(1, 2, 3)
    , [1, 2, 3]
    , 'Turn array like objects into arrays'
  )
  t.same((function () {
      return p.slice(arguments, 1, 2)
    })(1, 2, 3)
    , [ 2 ]
    , 'Turn array like objects into arrays, w/ start/end'
  )

  t.equal(p.last([1, 2, 3]), 3, 'Last element')

  t.equal(p.last({ c: 3, a: 1, b: 2}), 'b', 'Last key')

  t.equal(p.last('asdf'), 'f', 'Last character')

  t.equal(p.last(1234), 4, 'Last diget')

  t.equal(p.first([1, 2, 3]), 1, 'first element')

  t.equal(p.first({ c: 3, a: 1, b: 2}), 'c', 'first key')

  t.equal(p.first('asdf'), 'a', 'first character')

  t.equal(p.first(1234), 1, 'first diget')

  var obj1 = { foo: 'bar'}
  var obj2 = { a: 42 }
  var combined = p.combine(obj1, obj2)
  t.equal(combined.a, 42, 'Combined')
  t.equal(combined, obj1, 'obj2 and combined reference the same obj')
  t.equal(obj2.foo, undefined, 'a stays the same')
  t.equal(p.flatten([ 'a', 'b', 'c' ]), 'abc', 'Flatten Normal')
  t.equal(p.flatten(1), '1', 'Flatten nothing')
  t.equal(p.flatten([1, [2, [3, [4, [5 ]]]]]), '12345', 'Flatten Nest')

  t.end()
})

