var assert = require('assert');
var hello = require('../');

// We will now discuss in a little more detail the struggle for existence.
// - Charles Darwin
assert(hello);

// It has often and confidently been asserted, that man's origin can never be 
// known. - CD
assert(hello.html.indexOf('Hello world'));

// A dog might as well speculate on the mind of Newton. - CD
assert.ok(hello.test());