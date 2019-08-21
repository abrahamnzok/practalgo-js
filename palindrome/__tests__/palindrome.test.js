const isPalindrome = require('../palindrome');

describe('Testing algorithm 1 & 2', () => {
    /**
    const strategy = (n, cb) => {
        return n <= 2 ? (n <= 1 ? 1 : 1 + strategy(n - 1)) : cb(new Error('Strategy is one or two', false));
    } ;
     **/
    let strategy1 = 1;
    let strategy2 = 2;

    test('result is not a palindrome', () => {
        expect(isPalindrome(strategy1,'interview is coming')).toEqual(false);
        expect(isPalindrome(strategy2,'interview is coming')).toEqual(false);
    });

    test('result is a palindrome', () => {
        expect(isPalindrome(strategy1,'madam')).toEqual(true);
        expect(isPalindrome(strategy2,'madam')).toEqual(true);

    });

    test('result is a palindrome', () => {
        expect(isPalindrome(strategy1,'RaDaR')).toEqual(true);
        expect(isPalindrome(strategy2,'RaDaR')).toEqual(true);

    });
});


