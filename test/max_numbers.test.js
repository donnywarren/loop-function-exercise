import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { maxOfTwoNumbers } from '../funcs';

chai.use(sinonChai);
const expect = chai.expect;

describe('maxOfTwoNumbers', () => {
  function test(a, b, ans) {
    expect(maxOfTwoNumbers(a, b)).to.equal(ans);
  }

  it('handles 1 and 0', () => {
    test(1, 0, 1);
  });

  it('handles 2 and -3', () => {
    test(2, -3, 2);
  }); 

  it('handles negative numbers', () => {
    test(-2, -4, -2);
  });

  it('returns null if both arguments equal', () => {
    test(2, 2, null);
  });
})
