'use strict'
var assert = require('assert')

module.exports = class Returns {
  constructor (result) {
    this.result = result
  }

  match (subject) {
    assert.deepStrictEqual(subject(), this.result)
  }

  toString () {
    return `returns ${this.result}`
  }
}