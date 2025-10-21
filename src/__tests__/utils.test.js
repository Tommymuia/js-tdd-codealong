// src/__tests__/utils.test.js
import { currentAgeForBirthYear } from "../utils.js";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    const currentYear = new Date().getFullYear();
    const birthYear = 1984;
    const expectedAge = currentYear - birthYear;

    const ageOfPerson = currentAgeForBirthYear(birthYear);

    expect(ageOfPerson).toBe(expectedAge);
  });

  it("returns 0 if the person was born this year", () => {
    const currentYear = new Date().getFullYear();
    const age = currentAgeForBirthYear(currentYear);
    expect(age).toBe(0);
  });
});
