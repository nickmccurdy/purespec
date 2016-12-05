/* global test, given, rejects, resolves, returns, throws */
import { setup } from '.'
setup()

const hello = {
  // Synchronous
  sync (name) {
    if (name) return `Hello, ${name}!`
    else throw new Error('Missing name.')
  },

  // Asynchronous with Promises
  promise (name) {
    return new Promise(setTimeout).then(() => hello.sync(name))
  }
}

const tests = test('hello',
                   hello,
                   test('#sync()',
                        hello.sync,
                        given(['Nick'], returns('Hello, Nick!')),
                        throws('Missing name')),
                   test('#promise()',
                        hello.promise,
                        given(['Nick'], resolves('Hello, Nick!')),
                        rejects('Missing name')))

console.log(tests.toString())
tests.run()
