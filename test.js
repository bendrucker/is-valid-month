'use strict'

var test = require('tape')
var isValidMonth = require('./')

test(function (t) {
  t.notOk(isValidMonth(0))
  t.ok(isValidMonth(1))
  t.ok(isValidMonth(12))
  t.notOk(isValidMonth(13))

  t.notOk(isValidMonth('1'))
  t.notOk(isValidMonth())
  t.notOk(isValidMonth(1.5))

  t.end()
})
