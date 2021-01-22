const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("creates a Intern object", () => {
  const intern = new Intern("Dave", 5, "test@test.com", "UofU");

  expect(intern.name).toBe("Dave");
});

test("run getName function", () => {
  const intern = new Intern("Dave", 5, "test@test.com", "UofU");

  expect(intern.getName()).toBe("Dave");
});

test("run getSchool function", () => {
  const intern = new Intern("Dave", 5, "test@test.com", "UofU");

  expect(intern.getSchool()).toBe("UofU");
});
