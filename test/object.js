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


  describe('#isPlainObject()', function () {
    var isPlain = object.isPlainObject;

    it('is accessible', function () {
      expect(isPlain).not.to.be(undefined);
    });


    it('is a function', function () {
      expect(isPlain).to.be.a('function');
    });


    it('returns true for plain objects', function () {
      expect(isPlain({})).to.be(true);
      expect(isPlain(new Object())).to.be(true);
    });


    it('returns false for other objects', function () {
      function Dummy() {}

      var values = [
          [],
          new Array(),
          'foo',
          123,
          1.2,
          function () {},
          /foo/,
          new RegExp('foo'),
          true,
          false,
          new Dummy()
        ],
        len,
        i;


      for (i = 0, len = values.length; i < len; i += 1) {
        expect(isPlain(values[i])).to.be(false);
      };
    });
  });
}); // foo.object
