const numbers = [1, 2, 3, "a", 4];

const items = numbers.filter((v) => v >= 0).map((n) => ({ value: n }));

console.log(items);
