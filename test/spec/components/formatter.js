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
    it('should stringify some object with an array', function () {
        var str = Formatter.stringify({name: "John", numbers: [1, 3, 5]});
        expect(str).toEqual('{\n    "name": "John",\n    "numbers": [1, 3, 5]\n}');
    });
    it('should stringify some object with an array', function () {
        var str = Formatter.stringify({name: "John", numbers: [1, 3, 5]});
        expect(str).toEqual('{\n    "name": "John",\n    "numbers": [1, 3, 5]\n}');
    });
    it('should recursively stringify some object', function () {
        var str = Formatter.stringify({name: "John", numbers: [1, 3, 5], obj: {key: "value"}});
        expect(str).toEqual([
            '{',
            '    "name": "John",',
            '    "numbers": [1, 3, 5],',
            '    "obj": {',
            '        "key": "value"',
            '    }',
            '}'].join("\n"));
    });
    it('should recursively stringify some object with options', function () {
        var str = Formatter.stringify(
            {
                name: "John",
                numbers: [1, 3, 5],
                obj: {
                    key: "value"
                }
            }, {
                spacesPerTab: 2,
                quote: "'",
                quoteAroundKeys : false
            }
            );
        expect(str).toEqual([
            '{',
            '  name: \'John\',',
            '  numbers: [1, 3, 5],',
            '  obj: {',
            '    key: \'value\'',
            '  }',
            '}'].join("\n"));
    });
    // todo: escape quotes
    // todo: support keys with dashes
});
