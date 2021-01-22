class Manager extends Employee {
  constructor(name, officeNumber) {
    super(name);

    this.officeNumber = officeNumber;
  }

  getName() {
    return this.name;
  }

  getRole() {
    return "Manager";
  }
}
