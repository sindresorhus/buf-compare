import test from 'ava';

Buffer.compare = undefined;
const m = require('./');

test(t => {
	// https://github.com/iojs/io.js/blob/19ffb5cf1c50e9d91d0a7a35152d20f175a2385d/test/parallel/test-buffer.js#L1127-L1157
	const b = new Buffer('a');
	const c = new Buffer('c');
	const d = new Buffer('aa');

	t.is(m(b, c), -1);
	t.is(m(c, d), 1);
	t.is(m(d, b), 1);
	t.is(m(b, d), -1);
	t.is(m(c, c), 0);

	t.throws(() => {
		m(new Buffer(1), 'abc');
	});

	t.throws(() => {
		m('abc', new Buffer(1));
	});
});
