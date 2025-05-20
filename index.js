// exercise max of 2 number

// let number = max(10, 15);
// console.log(number);

// function max(a, b) {
//   if (a > b) return a;
//   else return b;
// }

// exercise landScape

// let landscape = isLandscape(5, 13);
// console.log(landscape);

// function isLandscape(width, height) {
//   return width > height;
// }

// exercise fizzBuzz

// divisible by 3-> fizz
// divisible by 5-> buzz
// divisible by both -> fizzBuzz

// let input = fizzBuzz(15);
// console.log(input);

// function fizzBuzz(input) {
//   if (typeof input !== "number") return "not a number";
//   if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
//   if (input % 3 === 0) return "Fizz";
//   if (input % 5 === 0) return "Buzz";
//   return input;
// }

// checkSpeed

// speed limit 70
// 5->1 point
// math.floor()
// 12 points -> 180km license suspended

// for (let i = 1; i <= 180; i++) {
//   if (i % 5 === 0) console.log(i);
// }

// let number = speed(70);
// console.log(number);

// let speedLimit = 70;
// let vehicleSpeed = 50;

// let extraSpeed = vehicleSpeed - speedLimit;

// let points = extraSpeed / 5;

// if (speedLimit >= vehicleSpeed) console.log("okay");
// else if (points > 12) {
//   console.log("suspended");
// } else console.log("points", ":", points);

// console.log(extraSpeed);

// function checkSpeed(speed) {
//   const speedLimit = 70;

//   let extraSpeed = speed - speedLimit;

//   let points = extraSpeed / 5;

//   if (speedLimit >= speed) console.log("okay");
//   else if (points > 12) {
//     console.log("suspended");
//   } else console.log("points", ":", points);
// }

// checkSpeed(50);

// odd even number

//  Exercise count truthy
// let array = [1, 2, 3, "", 4, null];

// function countTruthy(array) {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i]) {
//       count = count + 1;
//     }
//   }
//   return count;
// }

// console.log(countTruthy(array));

// exercise string properties

// const movie = {
//   title: "a",
//   release: 2024,
//   director: "b",
// };

// showProperties(movie);

// function showProperties(obj) {
//   for (let key in obj)
//     if (typeof obj[key] === "string") {
//       console.log(key, obj[key]);
//     }
// }

// exercise sum of multiply by 3 nd 5

// function sum(limit) {
//   let sum = 0;
//   for (let i = 0; i <= limit; i++)
//     if (i % 3 === 0 || i % 5 === 0) sum = sum + i;
//   return sum;
// }

// console.log(sum(50));

// exercise calculate grade

// const marks = [80, 80, 50, 50];

// console.log(calculateMarks(marks));

// function calculateMarks(marks) {
//   let sum = 0;
//   for (number of marks) {
//     sum = sum + number;
//   }
//   let average = sum / marks.length;
//   if (average < 60) return "F";
//   if (average < 70) return "D";
//   if (average < 80) return "C";
//   if (average < 90) return "B";
//   else "A";
// }

// Exercise start
// showStars(5);
// function showStars(rows) {
//   for (let i = 0; i < rows; i++) {
//     let string = "*";
//     for (let j = 0; j < i; j++) {
//       string += "*";
//     }

//     console.log(string);
//   }
// }

// show prime numbers
showPrime(20);

function checkPrime(number) {
  let assumePrime = true;
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      assumePrime = false;
    }
  }

  if (assumePrime) {
    console.log(number);
  }
}

function showPrime(limit) {
  for (i = 2; i <= limit; i++) {
    checkPrime(i);
  }
}
