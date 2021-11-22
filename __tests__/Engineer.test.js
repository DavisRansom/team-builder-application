const Engineer = require("../lib/Engineer");
const id = 1;
const name = "Joe Bob";
const email = "joebob@gmail.com";
const role = "Engineer";
const github = "DavisRansom";
const emp = new Engineer(id, name, email, github);

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

test("Stores a GitHub username", ()=>{
    expect(emp.getGithub()).toBe(github);
 });

test("Returns a role", ()=>{
    expect(emp.getRole()).toBe(role);
});