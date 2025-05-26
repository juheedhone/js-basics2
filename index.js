// exercise
// const numbers = arrayFromRange(1, 4);
// console.log(numbers);

// function arrayFromRange(min, max) {
//   const output = [];
//   for (let i = min; i <= max; i++) output.push(i);
//   return output;
// }

// exercise includes
// solution 1

// const numbers = [1, 2, 3, 4];

// function includes(array, searchElement) {
//   if (array.find((num) => num === searchElement)) {
//     return true;
//   }
//   return false;
// }

// console.log(includes(numbers, 7));

// solution 2
// const numbers = [1, 2, 3, 4];

// function includes(array, searchElement) {
//   for (let element of array) {
//     if (element === searchElement) {
//       return true;
//     }
//     return false;
//   }
// }

// console.log(includes(numbers, 1));

// exercise except
// const numbers = [1, 2, 3, 4];

// const output = except(numbers, [4]);
// console.log(output);

// function except(array, excluded) {
//   const output = [];
//   for (let element of array)
//     if (!excluded.includes(element)) output.push(element);
//   return output;
// }

// exercise moving an elements

// const numbers = [1, 2, 3, 4, 5, 6];

// const output = move(numbers, 1, 6);
// console.log(output);

// function move(array, index, offset) {
//   const position = index + offset;
//   if (position >= array.length || position < 0) {
//     console.log("Invalid Offset");
//     return;
//   }

//   const output = [...array];
//   const element = output.splice(index, 1)[0];
//   output.splice(index + offset, 0, element);
//   return output;
// }

// exercise Count Occurrences

// const numbers = [1, 2, 3, 4, 5];
// const count = countOccurrence(numbers, 1);
// console.log(count);

// function countOccurrence(array, searchElement) {
//   //   let count = 0;
//   //   for (let element of array) if (element === searchElement) count++;
//   //   return count;

//   array.reduce((accumulator, current) => {
//     const occurrence = current === searchElement;
//     console.log(current, searchElement, accumulator);
//     return accumulator + occurrence;
//   }, 0);
// }

// Exercise Get Max

// const numbers = [1, 2, 3, 4, 5, 7];
// const max = getMax(numbers);
// console.log(max);

// function getMax(array) {
//   //   if (array.length === 0) return undefined;
//   //   let max = array[0];
//   //   for (let i = 1; i < array.length; i++) {
//   //     if (array[i] > max) {
//   //       max = array[i];
//   //     }
//   //   }

//   const max = array.reduce((a, b) => (a > b ? a : b));
//   return max;
// }

// Exercise Movies

// All the movies in 2024 with rating > 4
// sort them by rating
// descending order
// pick there title

// anser "a","b"

const movies = [
  { title: "a", year: 2024, rating: 4.5 },
  { title: "b", year: 2024, rating: 4.7 },
  { title: "c", year: 2024, rating: 3 },
  { title: "d", year: 2023, rating: 4.5 },
];

const titles = movies
  .filter((m) => m.year === 2024 &&  m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => m.title);

console.log(titles);
