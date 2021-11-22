const Employee = require("../lib/Employee");
const id = 1;
const name = "Joe Bob";
const email = "joebob@gmail.com";
const role = "Employee";
const emp = new Employee(id, name, email);


test("Creates an object", ()=>{
    expect(typeof(emp)).toBe("object");
});

test("Stores an id", ()=>{
    expect(emp.getId()).toBe(id);
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