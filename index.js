const person = {
  firstName: "juhee",
  lastName: "dhone",

  set fullName(value) {
    if (typeof value !== "string") throw new Error("not a string ");

    const parts = value.split(" ");
    if (parts.length !== 2) throw new Error("enter first and last name");

    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  person.fullName = null;
} 
catch (e) {
  alert(e);
}

console.log(person);
