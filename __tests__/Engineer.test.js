const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("creates a Engineer object", () => {
  const engineer = new Engineer("Dave", 5, "test@test.com", "test@github");

  expect(engineer.name).toBe("Dave");
});

test("run getName function", () => {
  const engineer = new Engineer("Dave", 5, "test@test.com", "test@github");

  expect(engineer.getName()).toBe("Dave");
});

test("run getGithub function", () => {
  const engineer = new Engineer("Dave", 5, "test@test.com", "test@github");

  expect(engineer.getGithub()).toBe("test@github");
});
