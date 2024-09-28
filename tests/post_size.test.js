import { assert } from 'chai';
import postSize from '../public/assets/post_size.js';

describe('Функция проверки расчета размера поста', function () {
  it('без ссылок', function () {
    const expectedResult = 12;
    const result = postSize('Всем привет!');
    assert.equal(expectedResult, result);
  });
  it('ссылка в конце', function () {
    const expectedResult = 14;
    const result = postSize('look at my pet http://happyDog.com');
    assert.equal(expectedResult, result);
  });
  it('ссылка в середине', function () {
    const expectedResult = 21;
    const result = postSize('wow! is it www.Ufo2024.net is real???');
    assert.equal(expectedResult, result);
  });
  it('пусто', function () {
    const expectedResult = 0;
    const result = postSize('');
    assert.equal(expectedResult, result);
  });
  it('только ссылка', function () {
    const expectedResult = 0;
    const result = postSize('www.place.com');
    assert.equal(expectedResult, result);
  });
  it('ссылка в начале', function () {
    const expectedResult = 16;
    const result = postSize('https://tatoo.io is my first site');
    assert.equal(expectedResult, result);
  });
  it('две ссылки', function () {
    const expectedResult = 10;
    const result = postSize('https://lays.edu worse than www.pringles.net');
    assert.equal(expectedResult, result);
  });
  it('ссылка с большой ошибкой', function () {
    const expectedResult = 29;
    const result = postSize('look at my site http/deceived');
    assert.equal(expectedResult, result);
  });
  it('ссылка с ошибкой', function () {
    const expectedResult = 38;
    const result = postSize('look at my next site http/deceived.com');
    assert.equal(expectedResult, result);
  });
  it('без пробела', function () {
    const expectedResult = 4;
    const result = postSize('fish orwww.meat.net');
    assert.equal(expectedResult, result);
  });
});