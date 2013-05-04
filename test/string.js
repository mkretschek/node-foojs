var expect = require('expect.js')
  , string = require('../').string;

describe('foo.string', function () {

  it('is accessible', function () {
    expect(string).not.to.be(undefined);
  });


  it('is an object', function () {
    expect(string).to.be.an('object');
  });


  describe('.format()', function () {
    it('defaults to the original string if no formatting is passed', function () {
      expect(string.format('Foo{sufix}')).to.be('Foo{sufix}');
    });

    it('leaves the placeholder if replacement is not found', function () {
      expect(string.format('Foo{sufix}', {prefix : 'bar'})).to.be('Foo{sufix}');
      expect(string.format('Foobar', {prefix : 'bar'})).to.be('Foobar');
    });

    it('replaces ocurrences of formatting keys in the string', function () {
      expect(string.format('{n} Foos', {n : 9})).to.be('9 Foos');
      expect(string.format('Foo{sufix}', {sufix : 'bar'})).to.be('Foobar');
    });
  }); // .format();


  describe('.startsWith()', function () {
    it('matches only the beggining of the string', function () {
      expect(string.startsWith('foobar', 'bar')).to.be(false);
      expect(string.startsWith('foobar', 'foo')).to.be(true);
    });

    it('is case insensitive by default', function () {
      expect(string.startsWith('Foobar', 'foo')).to.be(true);
      expect(string.startsWith('Foobar', 'Foo')).to.be(true);
    });

    it('supports case sensitivity', function () {
      expect(string.startsWith('Foobar', 'foo', true)).to.be(false);
      expect(string.startsWith('Foobar', 'Foo', true)).to.be(true);
    });

  }); // .startsWith()


  describe('.endsWith()', function () {
    it('matches only the end of the string', function () {
      expect(string.endsWith('foobar', 'bar')).to.be(true);
      expect(string.endsWith('foobar', 'foo')).to.be(false);
    });

    it('is case insensitive by default', function () {
      expect(string.endsWith('FOOBAR', 'bar')).to.be(true);
      expect(string.endsWith('FOOBAR', 'BAR')).to.be(true);
    });

    it('supports case sensitivity', function () {
      expect(string.endsWith('FOOBAR', 'bar', true)).to.be(false);
      expect(string.endsWith('FOOBAR', 'BAR', true)).to.be(true);
    });
  }); // .endsWith()

}); // foo.string

