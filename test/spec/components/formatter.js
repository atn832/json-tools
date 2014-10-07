'use strict';

describe('Main', function () {
  var Formatter = require('../../../src/scripts/formatter.js');

  it('should parse some json', function () {
        var obj = Formatter.parse('{"name":"John"}');
      expect(obj).toEqual({name: "John"});
  });
  it('should parse some javascript object', function () {
        var obj = Formatter.parse('{name:"John"}');
      expect(obj).toEqual({name: "John"});
  });
  it('should stringify some object', function () {
        var str = Formatter.stringify({name: "John"});
      expect(str).toEqual('{\n    "name": "John"\n}');
  });
});
