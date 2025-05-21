const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

const another = Object.assign({}, circle);
console.log(another);

const another1 = { ...circle };
console.log(another1);
