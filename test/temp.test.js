import { expect } from 'chai';
import { tempConverter } from '../funcs';

describe('#tempConverter', () => {
  function test(temp, ans) {
    expect(tempConverter(temp)).to.equal(ans);
  }

  it('handles 32', () => {
    test(32, 0);
  });

  it('handles 0', () => {
    test(0, -17.77777777777778);
  });

  it('handles 212', () => {
    test(212, 100);
  });

});
