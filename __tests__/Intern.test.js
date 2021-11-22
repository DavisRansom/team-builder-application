const Intern = require("../lib/Intern");
const id = 1;
const name = "Joe Bob";
const email = "joebob@gmail.com";
const role = "Intern";
const school = "Cal State University San Marcos";
const emp = new Intern(id, name, email, school);

test("Creates an object", ()=>{
    expect(typeof(emp)).toBe("object");
});

test("Stores an id", ()=>{
    expect(emp.getId()).toBe(id);
});

test("Stores a school name", ()=>{
    expect(emp.getSchool()).toBe(school);
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