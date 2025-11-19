const {add, isPrime} = require("./../functions");
const assert = require("assert")

const testData = [
  { input: 3, result: true },
  { input: 4, result: false },
  { input: -1, result: false },
  { input: 10002, result: false },
  { input: 17, result: true },
  { input: -10002, result: false },
  { input: 1, result: false },
  { input: 5, result: true },
  { input: 19, result: true },
  { input: 2, result: true },


  { input: 2, result: false },
];

describe("#isPrime()", function () {
    testData.forEach((testUnit) => {
      it(`#isPrime(${testUnit.input})`, () => {
        // let result = isPrime(testUnit.input);
        // let expected = testUnit.result;

        assert.equal(isPrime(testUnit.input), testUnit.result);
    
        // if (result != correct)
        // {
        //   throw new Error(`Результат перевірки, чи є число простим.
        //     Результат: ${result}. Очікувалось ${correct}`);
        // }
      });
    });
});



/*
describe("#isPrime()", function () {
  it("#isPrime(3)", () => {
    let result = isPrime(3);
    let correct = true;

    if (result != correct)
    {
      throw new Error(`Результат перевірки, чи є число простим.
        Результат: ${result}. Очікувалось ${correct}`);
    }
  });

  it("#isPrime(4)", () => {
    let result = isPrime(4);
    let correct = false;

    if (result != correct)
    {
      throw new Error(`Результат перевірки, чи є число простим.
        Результат: ${result}. Очікувалось ${correct}`);
    }
  });

  it("#isPrime(-1)", () => {
    let result = isPrime(-1);
    let correct = false;

    if (result != correct)
    {
      throw new Error(`Результат перевірки, чи є число простим.
        Результат: ${result}. Очікувалось ${correct}`);
    }
  });

  it("#isPrime(-10000)", () => {
    let result = isPrime(-10000);
    let correct = false;

    if (result != correct)
    {
      throw new Error(`Результат перевірки, чи є число простим.
        Результат: ${result}. Очікувалось ${correct}`);
    }
  });


  it("#isPrime(10002)", () => {
    let result = isPrime(-10002);
    let correct = false;

    if (result != correct)
    {
      throw new Error(`Результат перевірки, чи є число простим.
        Результат: ${result}. Очікувалось ${correct}`);
    }
  });


  it("#isPrime(2)", () => {
    let result = isPrime(2);
    let correct = true;

    if (result != correct)
    {
      throw new Error(`Результат перевірки, чи є число простим.
        Результат: ${result}. Очікувалось ${correct}`);
    }
  });


  it("#isPrime(1)", () => {
    let result = isPrime(1);
    let correct = false;

    if (result != correct)
    {
      throw new Error(`Результат перевірки, чи є число простим.
        Результат: ${result}. Очікувалось ${correct}`);
    }
  });

  it("#isPrime(17)", () => {
    let result = isPrime(17);
    let correct = true;

    if (result != correct)
    {
      throw new Error(`Результат перевірки, чи є число простим.
        Результат: ${result}. Очікувалось ${correct}`);
    }
  });

  it("#isPrime(5)", () => {
    let result = isPrime(5);
    let correct = true;

    if (result != correct)
    {
      throw new Error(`Результат перевірки, чи є число простим.
        Результат: ${result}. Очікувалось ${correct}`);
    }
  });
});


*/










/*
it("Додавання чисел 3, 5", () => {
  let result = add(3, 5);
  let correct = 8;

  if (result != correct)
  {
    throw new Error(`Результат додавання чисел 3 і 5 невірний.
      Результат: ${result}. Очікувалось ${correct}`);
  }
});
*/



































/*
var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      let testData = [1, 2, 3];
      let result = [1, 2, 3].indexOf(4);
      let expected = -1;
      assert.equal(result, expected);
    });
  });
});
*/