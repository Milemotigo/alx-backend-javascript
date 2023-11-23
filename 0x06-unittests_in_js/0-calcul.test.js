const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('equal positive numbers', function() {
    assert.strictEqual(calculateNumber(2.0, 2.0), 4);
  });

  it('equal positive numbers (alternate)', function() {
    assert.strictEqual(calculateNumber(-2.0, -2.0), -4);
  });

  it('equal negative numbers', function() {
    assert.strictEqual(calculateNumber(-2.3, -1.8), -4);
  });

  it('negative and positive numbers', function() {
    assert.strictEqual(calculateNumber(-2.0, 2.0), 0);
  });

  it('positive and negative numbers', function() {
    assert.strictEqual(calculateNumber(-2.0, 2.0), 0);
  });

  it('0 and 0', function() {
    assert.strictEqual(calculateNumber(0.0, 0.0), 0);
  });

  it('equal positive numbers', function() {
    assert.strictEqual(calculateNumber(2.0, 2.0), 4);
  });

  it('equal negative numbers', function() {
    assert.strictEqual(calculateNumber(-2.0, -2.0), -4);
  });

  it('equal negative numbers (alternate)', function() {
    assert.strictEqual(calculateNumber(-2.3, -1.8), -4);
  });

  it('negative and positive numbers', function() {
    assert.strictEqual(calculateNumber(-2.0, 2.0), 0);
  });

  it('positive and negative numbers', function() {
    assert.strictEqual(calculateNumber(0.0, 0.0), 10);
  });
});