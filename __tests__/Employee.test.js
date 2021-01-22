const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("creates an Employee object", () => {
  const employee = new Employee("Dave", 5, "test@test.com");

  expect(employee.name).toBe("Dave");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("run getName function", () => {
  const employee = new Employee("Dave", 5, "test@test.com");

  expect(employee.getName()).toBe("Dave");
});

test("run getRole function", () => {
  const employee = new Employee("Dave", 5, "test@test.com");

  expect(employee.getRole()).toBe("Employee");
});
