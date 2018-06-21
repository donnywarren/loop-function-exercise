import { expect } from 'chai';
import { perfectSquares } from '../funcs';

describe('#perfectSquares', function() {
  let squares;
  before(() => {
    squares = perfectSquares(); 
  });

  it('should return an array', () => {
    expect(squares).to.be.an('Array');
  });

  it('should have 1 as the first perfect square', () => {
    expect(squares[0]).to.equal(1);
  });

  it('should include 4 as the second perfect square', () => {
    expect(squares[1]).to.equal(4);
  });

  it('should end on 100', () => {
    expect(squares[squares.length - 1]).to.equal(100);
  });

  it('should have 10 perfect squares', () => {
    expect(squares).to.have.length(10);
  });

  it('should have 49 as the 7th square', () => {
    expect(squares[6]).to.equal(49);
  });

  it('should have 16 as the 4th square', () => {
    expect(squares[3]).to.equal(16);
  });
});

