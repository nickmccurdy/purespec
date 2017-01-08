describe('Rejects matcher', () => {
  var rejects = new purified.matchers.Rejects('Missing name')

  describe('.prototype.constructor()', () => {
    it('returns a new Rejects with the given reason', () => {
      assert.deepEqual(rejects.reason, 'Missing name')
    })
  })

  describe('.prototype.run()', () => {
    context('given a subject that rejects with a String', () => {
      it('runs its subject as a Promise, asserting a rejection with the given reason')
    })

    context('given a subject that rejects with an Error', () => {
      it('runs its subject as a Promise, asserting a rejection with the given reason', () => {
        return rejects.run(example.hello.promise)
      })
    })

    context('given a subject that resolves', () => {
      it('runs its subject as a Promise, failing to assert a rejection with the given reason')
    })
  })

  describe('.prototype.toString()', () => {
    it('returns a String representation with its reason', () => {
      assert.strictEqual(rejects.toString(), 'rejects with Missing name')
    })
  })
})