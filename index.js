// function sum() {
//   let total = 0;
//   for (let element of arguments) total = element + total;
//   return total;
// }
// console.log(sum(1, 2, 3, 4, 5, 6));

// function sum(...args) {
//   let total = args.reduce((a, b) => a + b);
//   return total;
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 7));

function sum(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));
