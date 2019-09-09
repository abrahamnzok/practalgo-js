const isPalindrome = require('../palindrome');

describe('Testing algorithm 1 & 2', () => {

    const strategy1 = 1;
    const strategy2 = 2;
    //const strategy = 3;

    test('result is not a palindrome', () => {
        expect(isPalindrome(strategy1, 'interview is coming')).toEqual(false);
        expect(isPalindrome(strategy2, 'interview is coming')).toEqual(false);
    });

    test('result is a palindrome', () => {
        expect(isPalindrome(strategy1, 'madam')).toEqual(true);
        expect(isPalindrome(strategy2, 'madam')).toEqual(true);

    });

    test('Also a palindrome', () => {
        expect(isPalindrome(strategy1, 'RaDaR')).toEqual(true);
        expect(isPalindrome(strategy2, 'RaDaR')).toEqual(true);

    });
});

describe('Testing ultimate algorithm', () => {
    /**
     * To bet checked with the ultimate solution
     */
    /*test('sequence as input', () => {
        expect(isPalindrome(strategy3, 'Nurses, run!')).toEqual(true);
    });*/
});


