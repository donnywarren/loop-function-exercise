import { expect } from 'chai';
import { isCharacterVowel } from '../funcs';

describe('#isCharacterVowel', () => {
  function test(char, ans) {
    expect(isCharacterVowel(char)).to.equal(ans);
  }

  it('handles b', () => {
    test('b', false)
  });

  it('handles a', () => {
    test('a', true);
  });

  it('handles all vowels', () => {
    test('e', true);
    test('u', true);
    test('i', true);
    test('o', true);
  });

  it('treats y as a consonant', () => {
    test('y', false)
  });

  it('handles other consonants', () => {
    test('h', false);
    test('p', false);
    test('w', false);
  });
});

