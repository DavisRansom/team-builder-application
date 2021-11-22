const Manager = require("../lib/Manager");
const id = 1;
const name = "Joe Bob";
const email = "joebob@gmail.com";
const role = "Manager";
const officeNumber = 1;
const emp = new Manager(id, name, email, officeNumber);

test("Creates an object", ()=>{
    expect(typeof(emp)).toBe("object");
});

test("Stores an id", ()=>{
    expect(emp.getId()).toBe(id);
});

test("Stores an office number", ()=>{
    expect(emp.getOfficeNumber()).toBe(officeNumber);
});

test("Stores a name", ()=>{
    expect(emp.getName()).toBe(name);
});

test("Stores an email", ()=>{
    expect(emp.getEmail()).toBe(email);
});

test("Returns a role", ()=>{
    expect(emp.getRole()).toBe(role);
});