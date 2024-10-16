/* globals describe, it */
import { assert } from 'chai';
import convertTime from '../public/assets/convert_time.js';

describe('Функция проверки времени', function () {
  it('1 минута', function () {
    const expectedResult = '1 минуту назад';
    const result = convertTime(new Date('2024-01-01T12:00:00Z'), new Date('2024-01-01T12:01:00Z'));
    assert.equal(expectedResult, result);
  });

  it('5 минут', function () {
    const expectedResult = '5 минут назад';
    const result = convertTime(new Date('2024-01-01T12:00:00Z'), new Date('2024-01-01T12:05:00Z'));
    assert.equal(expectedResult, result);
  });

  it('0 минут', function () {
    const expectedResult = 'меньше минуты назад';
    const result = convertTime(new Date('2024-01-01T12:00:00Z'), new Date('2024-01-01T12:00:45Z'));
    assert.equal(expectedResult, result);
  });

  it('24 часа', function () {
    const expectedResult = '1 день назад';
    const result = convertTime(new Date('2024-01-01T12:00:00Z'), new Date('2024-01-02T12:01:00Z'));
    assert.equal(expectedResult, result);
  });

  it('21 час', function () {
    const expectedResult = '21 час назад';
    const result = convertTime(new Date('2024-01-01T00:00:00Z'), new Date('2024-01-01T21:00:00Z'));
    assert.equal(expectedResult, result);
  });

  it('6 лет', function () {
    const expectedResult = '6 лет назад';
    const result = convertTime(new Date('2018-01-01T12:00:00Z'), new Date('2024-01-01T12:01:00Z'));
    assert.equal(expectedResult, result);
  });

  it('11 минут', function () {
    const expectedResult = '11 минут назад';
    const result = convertTime(new Date('2024-01-01T12:00:00Z'), new Date('2024-01-01T12:11:00Z'));
    assert.equal(expectedResult, result);
  });

  it('17 минут', function () {
    const expectedResult = '17 минут назад';
    const result = convertTime(new Date('2024-01-01T12:00:00Z'), new Date('2024-01-01T12:17:00Z'));
    assert.equal(expectedResult, result);
  });
});
