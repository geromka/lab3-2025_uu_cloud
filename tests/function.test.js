const {add, isPrime} = require("../functions");
const assert = require("assert");

const testData = [
    { input: 3, result: true },
    { input: 4, result: false },
    { input: 10002, result: false },
    { input: 7, result: true },
    { input: -10002, result: false },
    { input: -1, result: false },
    { input: 1000000001, result: false }
];

describe("#isPrime()", function () {
    testData.forEach((testUnit) => {
        it(`#isPrime(${testUnit.input})`, () => {
            assert.equal(isPrime(testUnit.input), testUnit.result);
        });
    });
});


/*
it("Додавання чисел 3, 5", () => {
    let result = add(3, 5);
    let expected = 8;
    if (result != expected) {
        throw new Error(`Результат додавання чисел 3 і 5 невірний.
      Результат: ${result}. Очікувалось ${expected}`);
    }
});
*/


    /*
    it("#isPrime(3)", () => {
        let result  = isPrime(3);
        let expected = true;
        
        if (result != expected) {
              throw new Error(`Результат перевірки, чи є число простим.
                Результат: ${result}. Очікувалось ${expected}`);
        }
    });

    it("#isPrime(4)", () => {
        let result  = isPrime(4);
        let expected = false;
        
        if (result != expected) {
              throw new Error(`Результат перевірки, чи є число простим.
                Результат: ${result}. Очікувалось ${expected}`);
        }
    });

    it("#isPrime(7)", () => {
        let result  = isPrime(17);
        let expected = true;
        
        if (result != expected) {
              throw new Error(`Результат перевірки, чи є число простим.
                Результат: ${result}. Очікувалось ${expected}`);
        }
    });


    it("#isPrime(10002)", () => {
        let result  = isPrime(10002);
        let expected = false;
        
        if (result != expected) {
              throw new Error(`Результат перевірки, чи є число простим.
                Результат: ${result}. Очікувалось ${expected}`);
        }
    });

    it("#isPrime(-10002)", () => {
        let result  = isPrime(-10002);
        let expected = false;
        
        if (result != expected) {
              throw new Error(`Результат перевірки, чи є число простим.
                Результат: ${result}. Очікувалось ${expected}`);
        }
    });

    it("#isPrime(-1)", () => {
        let result  = isPrime(-1);
        let expected = false;
        
        if (result != expected) {
              throw new Error(`Результат перевірки, чи є число простим.
                Результат: ${result}. Очікувалось ${expected}`);
        }
    });
    */