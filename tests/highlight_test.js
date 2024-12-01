/* globals describe, it */
import { assert } from 'chai';
import highlightHashtags from '../public/assets/highlight.js';

describe('проверка хештегов', function () {
  it('нет ссылок', function () {
    const expectedResult = 'i want to know risk managment';
    const result = highlightHashtags('i want to know risk managment');
    assert.equal(expectedResult, result);
  });

  it('хештег в первом слове', function () {
    const expectedResult = '<a href="/search?tag=look" >#look</a> at my dog';
    const result = highlightHashtags('#look at my dog');
    assert.equal(expectedResult, result);
  });

  it('хештег в середине', function () {
    const expectedResult = 'i want to <a href="/search?tag=know" >#know</a> risk managment';
    const result = highlightHashtags('i want to #know risk managment');
    assert.equal(expectedResult, result);
  });

  it('хештег c цифрой', function () {
    const expectedResult = 'try to find <a href="/search?tag=4" >#4</a> mushrooms';
    const result = highlightHashtags('try to find #4 mushrooms');
    assert.equal(expectedResult, result);
  });

  it('два хештега', function () {
    const expectedResult = 'you need to choose <a href="/search?tag=one" >#one</a> of <a href="/search?tag=two" >#two</a> options';
    const result = highlightHashtags('you need to choose #one of #two options');
    assert.equal(expectedResult, result);
  });

  it('все слова - хештеги', function () {
    const expectedResult = '<a href="/search?tag=hi" >#hi</a> <a href="/search?tag=mom" >#mom</a>';
    const result = highlightHashtags('#hi #mom');
    assert.equal(expectedResult, result);
  });

  it('хештег в конце', function () {
    const expectedResult = 'keep doing what you are <a href="/search?tag=doing" >#doing</a>';
    const result = highlightHashtags('keep doing what you are #doing');
    assert.equal(expectedResult, result);
  });
});
