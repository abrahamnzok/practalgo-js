const fibonacci = require('../fibonacci');

describe('Testing algorithm 1 & 2', () => {
    /**
     const strategy = (n, cb) => {
        return n <= 2 ? (n <= 1 ? 1 : 1 + strategy(n - 1)) : cb(new Error('Strategy is one or two', false));
    } ;
     **/
    let strategy1 = 1;
    let strategy2 = 2;

    test('result is 0 when n=0', () => {
        expect(fibonacci(strategy1,0)).toEqual(0);
        expect(fibonacci(strategy2,0)).toEqual(0);
    });
    test('result is 1 when n=1', () => {
        expect(fibonacci(strategy1,1)).toEqual(1);
        expect(fibonacci(strategy2,1)).toEqual(1);
    });
    test('result is 2 when n=1', () => {
        expect(fibonacci(strategy1,2)).toEqual(1);
        expect(fibonacci(strategy2,2)).toEqual(1);
    });

    test('result is 21 when n=8', () => {
        expect(fibonacci(strategy1,8)).toEqual(21);
        expect(fibonacci(strategy2,8)).toEqual(21);

    });

    test('result is 55 when n=10', () => {
        expect(fibonacci(strategy1,10)).toEqual(55);
        expect(fibonacci(strategy2,10)).toEqual(55);

    });

    test('result is 89 when n=11', () => {
        expect(fibonacci(strategy1,11)).toEqual(89);
        expect(fibonacci(strategy2,11)).toEqual(89);

    });

    test('result is 144 when n=12', () => {
        expect(fibonacci(strategy1,12)).toEqual(144);
        expect(fibonacci(strategy2,12)).toEqual(144);

    });
    test('result is 233 when n=13', () => {
        expect(fibonacci(strategy1,13)).toEqual(233);
        expect(fibonacci(strategy2,13)).toEqual(233);

    });

    test('result is 337 when n=14', () => {
        expect(fibonacci(strategy1,14)).toEqual(377);
        expect(fibonacci(strategy2,14)).toEqual(377);

    });
});


