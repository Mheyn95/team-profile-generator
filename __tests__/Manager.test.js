const { expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

test("creates a Manager object", () => {
  const manager = new Manager("Dave", 5, "test@test.com");

  expect(manager.name).toBe("Dave");
});

test("run getName function", () => {
  const manager = new Manager("Dave", 5, "test@test.com");

  expect(manager.getId()).toBe(5);
});
