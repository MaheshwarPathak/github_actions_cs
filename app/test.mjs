import assert from 'node:assert/strict'
import { message } from './src/message.js'

assert.equal(typeof message, 'string')
assert.ok(message.length > 0)
console.log('Tests passed')
