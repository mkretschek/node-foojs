var expect = require('expect.js')
  , object = require('../').object;


describe('foo.object', function () {
  it('is accessible', function () {
    expect(object).not.to.be(undefined);
  });


  it('is an object', function () {
    expect(object).to.be.an('object');
  });


  describe('.dig()', function () {
    var obj = {
      foo : {
        bar : 'baz'
      },
      locales : {
        'en-US' : {
          text : 'en-US text'
        }
      },
      foobar : 'found'
    };


    it('fetches the value for a key in an object', function () {
      expect(object.dig(obj, 'foobar')).to.be('found');
    });


    it('works with a string of nested keys', function () {
      expect(object.dig(obj, 'foo.bar')).to.be('baz');
    });


    it('works with an array of strings', function () {
      expect(object.dig(obj, ['foobar'])).to.be('found');
      expect(object.dig(obj, ['foo', 'bar'])).to.be('baz');
    });


    it("doesn't work with nested keys string inside array", function () {
      expect(object.dig(obj, ['foo.bar'])).to.be(undefined);
    });


    it('returns undefined if any of the keys is undefined', function () {
      expect(object.dig(obj, 'inexistent')).to.be(undefined);
      expect(object.dig(obj, 'foo.baz')).to.be(undefined);
      expect(object.dig(obj, ['foo', 'baz'])).to.be(undefined);
    });

  }); // .dig()
}); // foo.object
