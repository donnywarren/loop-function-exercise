import { expect } from 'chai';
import { meanCharacter } from '../funcs';

describe('#meanCharacter', () => {
  function test(villain, movie, string) {
    expect(meanCharacter(villain, movie)).to.equal(string);
  } 

  it('handles Scar and The Lion King', () => {
    test('Scar', 'The Lion King', 'Scar is the meanest character in The Lion King')
  });

  it('handles Thanos from Avengers Infinity War', () => {
    test('Thanos', 'Marvel Avengers: Infinity War', 'Thanos is the meanest character in Marvel Avengers: Infinity War');
  });

  it('handles Yuichi Shimizu ', () => {
    test('Yuichi Shimizu', '悪人', 'Yuichi Shimizu is the meanest character in 悪人');
    
  });
});
