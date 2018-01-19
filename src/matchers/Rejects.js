const ComparisonResult = require('../results/ComparisonResult')
const Result = require('../results/Result')
const _ = require('lodash/fp')

module.exports = class Rejects {
  constructor (reason) {
    this.reason = reason
  }

  run (subject) {
    try {
      return subject()
        .then(actual => new Result(this, true))
        .catch(reason => {
          const error = _.isError(reason) ? reason : new Error(reason)
          return new ComparisonResult(this, error, new Error(this.reason))
        })
    } catch (error) {
      return new Result(this, error)
    }
  }

  toString () {
    return `rejects with ${this.reason}`
  }
}
