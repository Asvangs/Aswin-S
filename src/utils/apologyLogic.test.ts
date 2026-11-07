import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateNextDodgePosition,
  calculateYesButtonScale,
  getEvasionMessage,
  generateCertificateCode,
} from './apologyLogic';

test('calculateNextDodgePosition stays within container bounds', () => {
  const containerW = 300;
  const containerH = 200;
  const buttonW = 100;
  const buttonH = 40;

  for (let attempt = 0; attempt < 15; attempt++) {
    const pos = calculateNextDodgePosition(attempt, containerW, containerH, buttonW, buttonH);
    assert.ok(pos.x >= 0, `x (${pos.x}) must be >= 0`);
    assert.ok(pos.x <= containerW - buttonW, `x (${pos.x}) must be <= ${containerW - buttonW}`);
    assert.ok(pos.y >= 0, `y (${pos.y}) must be >= 0`);
    assert.ok(pos.y <= containerH - buttonH, `y (${pos.y}) must be <= ${containerH - buttonH}`);
  }
});

test('calculateYesButtonScale increases smoothly with attempts up to max cap', () => {
  assert.equal(calculateYesButtonScale(0), 1.0);
  assert.equal(calculateYesButtonScale(1), 1.08);
  assert.equal(calculateYesButtonScale(5), 1.4);
  assert.equal(calculateYesButtonScale(10), 1.6);
  assert.equal(calculateYesButtonScale(50), 1.6); // Cap at 1.6
});

test('getEvasionMessage cycles through quips without crashing', () => {
  const quips = ['Quip 1', 'Quip 2', 'Quip 3'];
  assert.equal(getEvasionMessage(1, quips), 'Quip 1');
  assert.equal(getEvasionMessage(2, quips), 'Quip 2');
  assert.equal(getEvasionMessage(3, quips), 'Quip 3');
  assert.equal(getEvasionMessage(4, quips), 'Quip 1');
});

test('generateCertificateCode formats code consistently', () => {
  const date = new Date(2026, 10, 7);
  const code = generateCertificateCode('Swati', date);
  assert.equal(code, 'FOREVER-SWAT-20261107');
});
