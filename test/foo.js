
var expect = require('expect.js')
  , foo = require('../');


describe('foo', function () {

  it('is accessible', function () {
    expect(foo).not.to.be(undefined);
  });


  it('is an object', function () {
    expect(foo).to.be.an('object');
  });

}); // foo

