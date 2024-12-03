/* globals describe, it */
import { assert } from 'chai';
import highlightHashtags from '../public/assets/links.js';

describe('проверка замены ссылок', function () {
  it('нет ссылок', function () {
    const expectedResult = 'i want to know risk managment';
    const result = highlightHashtags('i want to know risk managment');
    assert.equal(expectedResult, result);
  });

  it('ссылка в последнем слове', function () {
    const expectedResult = "Мой гитхаб: <a href='<https://github.com/burtovoy>'https://github.com/burtovoy</a>";
    const result = highlightHashtags('Мой гитхаб: https://github.com/burtovoy');
    assert.equal(expectedResult, result);
  });

  it('ссылка в первом слове', function () {
    const expectedResult = "<a href='<www.github.com>'www.github.com</a> - это мой гитхаб";
    const result = highlightHashtags('www.github.com - это мой гитхаб');
    assert.equal(expectedResult, result);
  });

  it('две ссылки', function () {
    const expectedResult = "<a href='<www.google.gov>'www.google.gov</a> это не мой гитхаб, а <a href='<https://github.com/burtovoy>'https://github.com/burtovoy</a> мой";
    const result = highlightHashtags('www.google.gov это не мой гитхаб, а https://github.com/burtovoy мой');
    assert.equal(expectedResult, result);
  });

  it('только ссылка', function () {
    const expectedResult = "<a href='<https://lays.edu>'https://lays.edu</a>";
    const result = highlightHashtags('https://lays.edu');
    assert.equal(expectedResult, result);
  });

  it('ссылка с ошибкой', function () {
    const expectedResult = 'look at my next site http/deceived.com';
    const result = highlightHashtags('look at my next site http/deceived.com');
    assert.equal(expectedResult, result);
  });

  it('две ссылки подряд', function () {
    const expectedResult = "<a href='<https://lays.edu>'https://lays.edu</a> <a href='<https://pringles.ru>'https://pringles.ru</a>";
    const result = highlightHashtags('https://lays.edu https://pringles.ru');
    assert.equal(expectedResult, result);
  });
});
