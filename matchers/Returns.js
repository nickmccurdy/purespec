import assert from 'core-assert'

export default class Returns {
  constructor (result) {
    this.result = result
  }

  run (subject) {
    assert.deepStrictEqual(subject(), this.result)
  }

  toString () {
    return `returns ${this.result}`
  }
}
