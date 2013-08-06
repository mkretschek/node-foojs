
var expect = require('expect.js')
  , foo = require('../');


describe('foo', function () {

  it('is accessible', function () {
    expect(foo).not.to.be(undefined);
  });


  it('is an object', function () {
    expect(foo).to.be.an('object');
  });


  describe('#type()', function () {
    it('is accessible', function () {
      expect(foo.type).not.to.be(undefined);
    });


    it('is a function', function () {
      expect(foo.type).to.be.a('function');
    });


    it('returns the proper type of objects', function () {
      expect(foo.type('bar')).to.be('string');
      expect(foo.type(123)).to.be('number');
      expect(foo.type(1.2)).to.be('number');
      expect(foo.type(0)).to.be('number');
      expect(foo.type([])).to.be('array');
      expect(foo.type(new Array())).to.be('array');
      expect(foo.type({})).to.be('object');
      expect(foo.type(new Object())).to.be('object');
      expect(foo.type(function () {})).to.be('function');
      expect(foo.type(null)).to.be('null');
      expect(foo.type(false)).to.be('boolean');
      expect(foo.type(true)).to.be('boolean');
      expect(foo.type(/foo/)).to.be('regexp');
      expect(foo.type(new RegExp('foo'))).to.be('regexp');
    });

  });

}); // foo

