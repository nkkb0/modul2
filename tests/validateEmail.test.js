/* globals describe, it */
import { assert } from 'chai';
import postSize from '../public/assets/validateEmail.js';

describe('Функция проверки расчета размера поста', function () {
  it('example@example.com', function () {
    const expectedResult = true;
    const result = postSize('example@example.com');
    assert.equal(expectedResult, result);
  });

  it('example.com', function () {
    const expectedResult = false;
    const result = postSize('example.com');
    assert.equal(expectedResult, result);
  });

  it('example@.com', function () {
    const expectedResult = false;
    const result = postSize('example@.com');
    assert.equal(expectedResult, result);
  });

  it('example.name@example.com', function () {
    const expectedResult = true;
    const result = postSize('example.name@example.com');
    assert.equal(expectedResult, result);
  });

  it('example@com', function () {
    const expectedResult = false;
    const result = postSize('example@com');
    assert.equal(expectedResult, result);
  });

  it('example@', function () {
    const expectedResult = false;
    const result = postSize('example@');
    assert.equal(expectedResult, result);
  });

  it('example', function () {
    const expectedResult = false;
    const result = postSize('example');
    assert.equal(expectedResult, result);
  });
});
