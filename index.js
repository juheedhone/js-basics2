// Object Oriented Programming

// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 2,
//   },
//   isVisible: true,
//   draw: function () {
//     console.log("draw");
//   },
// };

// circle.draw(); //method

// factory function(camelNotation)

// function createCircle(name, age, location) {
//   return {
//     name,
//     age,
//     location,
//     draw() {
//       console.log("draw");
//     },
//   };
// }

// const circle = createCircle("juhee", 25, "nagpur");
// console.log(circle);

// constructor function(PascalNotation)

function Circle(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
  this.draw = function () {
    console.log("draw");
  };
}

const circle1 = new Circle("juhee", 25, "nagpur");
console.log(circle1);


