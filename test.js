'use strict';
var assert = require('assert');
var test = require('ava');
var bufCompare = require('./');

test(function (t) {
	// https://github.com/iojs/io.js/blob/19ffb5cf1c50e9d91d0a7a35152d20f175a2385d/test/parallel/test-buffer.js#L1127-L1157
	var b = new Buffer('a');
	var c = new Buffer('c');
	var d = new Buffer('aa');

	assert.equal(bufCompare(b, c), -1);
	assert.equal(bufCompare(c, d), 1);
	assert.equal(bufCompare(d, b), 1);
	assert.equal(bufCompare(b, d), -1);
	assert.equal(bufCompare(c, c), 0);

	assert.throws(function () {
		bufCompare(new Buffer(1), 'abc');
	});

	assert.throws(function () {
		bufCompare('abc', new Buffer(1));
	});

	t.end();
});
