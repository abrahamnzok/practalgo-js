const {setWordToLowerCase, setWordToUpperCase, joinStrings} = require('../utils');

test('word is lower cased', () => {
    expect(setWordToLowerCase('TestIng')).toEqual('testing');
});

test('word is upper cased', () => {
    expect(setWordToUpperCase('testinG')).toEqual('INTERVIEW');
});

