'use strict()';

// We will now discuss in a little more detail the struggle for existence.
// - Charles Darwin

var assert = require('assert');
var hello = require('../');

// It has often and confidently been asserted, that man's origin can never be 
// known. - CD
assert(hello);

// A dog might as well speculate on the mind of Newton. - CD
assert(hello.html.indexOf('Hello world'));

// And now for a really good quote.
assert.ok(hello.test());