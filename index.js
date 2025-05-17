let person = {
  name: "juhee",
  age: 25,
};

for (let key in person) {
  console.log(key, ":", person[key]);
}

let color = ["red", "blue"];

for (let index in color) {
  console.log(index, color[index]);
}
