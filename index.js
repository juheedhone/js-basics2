// exercise Address object

// let address = {
//   street: "a",
//   city: "b",
//   zipcode: 2,
// };

// function showAddress(address) {
//   for (let key in address) {
//     console.log(key, address[key]);
//   }
// }

// showAddress(address);

// exercise Factory and constructor function.

// const address = {
//   street: "a",
//   city: "b",
//   zipcode: 2,
// };

// function add(street, city, zipcode) {
//   return {
//     street,
//     city,
//     zipcode,
//   };
// }

// const address = add("wadi", "nagpur", 2);
// console.log(address);

// function Add(street, city, zipcode) {
//   this.street = street;
//   this.city = city;
//   this.zipcode = zipcode;
// }

// const address1 = new Add("wadi", "nagpur", 2);
// const address2 = new Add("wadi", "nagpur", 2);
// console.log(address1);

// exercise object equality

// function areEqual(address1, address2) {
//   return (
//     address1.street === address2.street &&
//     address1.city === address2.city &&
//     address1.zipcode === address2.zipcode
//   );
// }

// let checkEqual = areEqual(address1, address2);
// console.log(checkEqual);

// exercise blog post

// const blog = {
//   title: "happiness",
//   body: "b",
//   author: "c",
//   views: 4,
//   comments: [
//     { author: "a", body: "b" },
//     { author: "c", body: "d" },
//   ],
//   isLive: true,
// };

// function showBlog(blog) {
//   for (let key in blog) {
//     console.log(key, blog[key]);
//   }
// }

// showBlog(blog);

// const blog = {
//   title: "happiness",
//   body: "b",
//   author: "c",
//   views: 4,
//   comments: [
//     { author: "a", body: "b" },
//     { author: "c", body: "d" },
//   ],
//   isLive: true,
// };

// exercise blog post constructor function

// function add(title, body, author, views, comments) {
//   return {
//     title,
//     body,
//     author,
//     views,
//     comments,
//     isLive: false,
//   };
// }

// function Post(title, body, author) {
//   this.title = title;
//   this.body = body;
//   this.author = author;
//   this.isLive = false;
//   this.comments = [];
// }

// const blog = new Post("happiness", "a", "c");
// console.log(blog);

// exercise Price range object

let priceRange = [
  { rangeStart: 0, 
    rangeEnd: 100, 
    label: "$", 
    hoverLabel: "inexpensive" },
  {
    rangeStart: 100,
    rangeEnd: 500,
    label: "$$",
    hoverLabel: "Moderate",
  },
  { rangeStart: 500,
     rangeEnd: 1000, 
     label: "$$$",
      hoverLabel: "expensive" },
];

console.log(priceRange)
