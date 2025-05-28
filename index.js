// Exercise sum of argument in array

// function sum(...args) {
//   if (args.length === 1 && Array.isArray(args[0])) args = [...args[0]];
//   return args.reduce((a, b) => a + b);
// }

// console.log(sum([1, 2, 3, 4]));

//Exercise area of circle

// const circle = {
//   radius: 2,
//   get area() {
//     return 3.15 * this.radius * this.radius;
//   },
// };

// console.log(circle.area);

// Exercise Error Handling

const numbers = [1, 2, 3, 4, 5];
try {
  const count = countOccurrence(numbers, 1);
  console.log(count);
} catch (e) {
  console.log("error", e);
}

function countOccurrence(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("value is not number");
  return array.reduce((acc, current) => {
    const occur = current === searchElement ? 1 : 0;
    return acc + occur;
  }, 0);
}
