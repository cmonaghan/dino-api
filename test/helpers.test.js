import {
  convertEmissionsToDinos,
} from '../src/helpers.js';

describe("convertEmissionsToDinos", () => {
  test("the function exists", () => {
    expect(convertEmissionsToDinos).toBeTruthy();
  });

  test("returns array", () => {
    let result = convertEmissionsToDinos(1);
    const isArray = Array.isArray(result);
    expect(isArray).toBe(true);
  });

  test("array contains object with expected properties", () => {
    let result = convertEmissionsToDinos(1);
    let firstDino = result[0];

    expect(firstDino.hasOwnProperty("name")).toBe(true);
    expect(firstDino.hasOwnProperty("count")).toBe(true);
    expect(firstDino.hasOwnProperty("image")).toBe(true);
  });

  test.todo("another test");
});
