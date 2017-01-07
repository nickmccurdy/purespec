'use strict'
var assert = require('assert')

module.exports = class Throws {
  constructor (exception) {
    this.exception = exception
  }

  run (subject) {
    assert.throws(subject, this.exception)
  }

  toString () {
    return `throws ${this.exception}`
  }
}