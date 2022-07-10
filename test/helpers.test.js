import {
  convertMilesToFuelGallons,
  convertFuelToOrganicMatterTons,
  convertTonsToTRexCount,
} from '../src/helpers.js';

describe("convertMilesToFuelGallons", () => {
  test("the function exists", () => {
    expect(convertMilesToFuelGallons).toBeTruthy();
  });

  test("returns number", () => {
    let result = convertMilesToFuelGallons(10, 20);
    expect(typeof result === "number").toBe(true);
  });

  test("calculates correct value", () => {
    let result1 = convertMilesToFuelGallons(10, 20);
    expect(result1).toBe(.5);

    let result2 = convertMilesToFuelGallons(63.2, 23.5);
    expect(result2).toBe(63.2/23.5);
  });
});

describe("convertFuelToOrganicMatterTons", () => {
  test("the function exists", () => {
    expect(convertFuelToOrganicMatterTons).toBeTruthy();
  });

  test("returns number", () => {
    let result = convertFuelToOrganicMatterTons(1);
    expect(typeof result === "number").toBe(true);
  });

  test("calculates correct value using constant", () => {
    let result1 = convertFuelToOrganicMatterTons(1);
    expect(result1).toBe(98);

    let result2 = convertFuelToOrganicMatterTons(.5);
    expect(result2).toBe(.5*98);
  });
});

describe("convertTonsToTRexCount", () => {
  test("the function exists", () => {
    expect(convertTonsToTRexCount).toBeTruthy();
  });

  test("object has expected properties", () => {
    let result = convertTonsToTRexCount(10);

    expect(result.hasOwnProperty("name")).toBe(true);
    expect(result.hasOwnProperty("count")).toBe(true);
    expect(result.hasOwnProperty("image")).toBe(true);
  });
});
