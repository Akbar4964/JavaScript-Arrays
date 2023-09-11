// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(test);
// function test(item, index, array) {
//   console.log(item);
//   console.log(index);
//   console.log(array);
// }

// const numbers = [
//   {
//     name: "Iphone15",
//     price: 1500,
//     count: 3,
//   },
//   {
//     name: "Iphone14",
//     price: 1400,
//     count: 13,
//   },
//   {
//     name: "Iphone13",
//     price: 1300,
//     count: 7,
//   },
// ];
// const numbersValues = numbers.map((numbers) => ({
//   telModel: numbers.name,
//   realPrice: numbers.price,
//   allPrice: numbers.price * numbers.count,
//   howMuch: numbers.count,
// }));
// console.log(numbersValues);

// const numbers = [1, 2, 3, 4, 5, 6];

// const even = numbers.filter(isEven);
// function isEven(value) {
//   return value % 2 === 0;
// }
// console.log(even);

// const verify = [
//   {
//     name: "Akbar",
//     age: 17,
//   },
//   {
//     name: "Akbar",
//     age: 18,
//   },
//   {
//     name: "Akbar",
//     age: 20,
//   },
//   {
//     name: "Akbar",
//     age: 21,
//   },
//   {
//     name: "Akbar",
//     age: 14,
//   },
//   {
//     name: "Akbar",
//     age: 11,
//   },
// ];

// const verifyAge = verify.filter(isAge);
// function isAge(value) {
//   return value.age >= 18;
// }
// console.log(verifyAge);

// const wifiPassword = [
//   {
//     employeeName: "Akbar",
//     password: "1234567",
//   },
//   {
//     employeeName: "Dilshod",
//     password: 1234567,
//   },
//   {
//     employeeName: "Samir",
//     password: "123456789",
//   },
// ];
// const checkPassword = wifiPassword.filter(
//   (parol) => parol.password === 1234567
// );
// console.log(checkPassword);

// const people = [
//   {
//     name: "Akbar",
//     ticket: 1,
//   },
//   {
//     name: "A1",
//     ticket: 2,
//   },
//   {
//     name: "A2",
//     ticket: 3,
//   },
//   {
//     name: "A3",
//     ticket: 4,
//   },
//   {
//     name: "A4",
//     ticket: 5,
//   },
//   {
//     name: "A5",
//     ticket: 6,
//   },
//   {
//     name: "A6",
//     ticket: 7,
//   },
//   {
//     name: "A7",
//     ticket: 8,
//   },
//   {
//     name: "A8",
//     ticket: 9,
//   },
//   {
//     name: "A9",
//     ticket: 10,
//   },
//   {
//     name: "A10",
//     ticket: 0,
//   },
// ];

// const tickets = people.filter(
//   (tickNum) => tickNum.ticket === Math.trunc(Math.random() * 10)
// );
// console.log(tickets);

// const isReduce = [1, 2, 3, 4, 5];
// const total = isReduce.reduce(result, 0);
// function result(acc, value) {
//   return acc + value;
// }
// console.log(total);

// const numbers = [1, 2, 3, 4, 5];
// numbers.pop();
// console.log(numbers);

// const numbers = [1, 2, 3, 4];
// numbers.push(5)
// console.log(numbers)

// const numbers = [2, 3, 4, 5];
// numbers.unshift(1);
// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5];
// numbers.shift();
// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5];
// const strings = ["", "", "", "", ""];
// const result = strings.concat(numbers);
// console.log(result);

// const numbers = [1, 2, 3, 4, 5];
// numbers.splice(1, 4);
// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.slice(0, 1);
// console.log(result);

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.toString();
// console.log(result);

// const numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers);

// const numbers = [1, 2, 5, 3, 4, 7, 6];
// const name = ["Akbar", "Xislat", "To'lqin"];
// numbers.sort();
// name.sort();
// console.log(numbers);
// console.log(name);

// const numbers = [1, 2, 3, 4, 5];
// const test = numbers.every(result);
// function result(value) {
//   return value > 2;
// }
// console.log(test);

// const numbers = [1, 2, 3, 4, 5];
// const test = numbers.some(result);
// function result(value) {
//   return value > 4;
// }
// console.log(test);

// const numbers = [1, 2, 3, 4, 5, 10, "Akbar", 10 + 8, "Shuhratullayev"];
// const result = numbers.indexOf("Shuhratullayev");
// console.log(numbers);
// console.log(result);

// const numbers = [1, 2, 3, 4, 5, 10, "Akbar", 10 + 8, "Shuhratullayev"];
// const result = numbers.lastIndexOf("Akbar");
// console.log(numbers);
// console.log(result);

// const numbers = [1, 2, 3, 4, 5];
// const num = numbers.find(result);
// function result(value) {
//   return value > 1;
// }
// console.log(num);

// const numbers = [1, 2, 3, 4, 5];
// const test = numbers.filter(result);
// function result(value) {
//   return value > 1;
// }
// console.log(test);

// const numbers = [1, 2, 3, 4, 5];
// const test = numbers.includes(3);
// console.log(test);

// const numbers = [1, 2, 3, 4, 5];
// const item = numbers.map((res) => res * 2);
// console.log(item);

// const numbers = [1, 2, 3, 4, 5];
// const number = [6];
// const res = numbers.concat(number);
// console.log(res);

// const numbers = [1, 2, 3, 4, 5, 6];
// const res = numbers.copyWithin(3);
// console.log(res);

// const numbers = [1, 2, 3, 4, 5];
// const res = numbers.entries(test);
// console.log(res);
// function test(value) {
//   if (value < 2) {
//     console.log(true);
//   }
// }

// const numbers = [1, 2, 3, 4, 5];
// const res = numbers.every(test);
// function test(value) {
//   return value > 0;
// }
// console.log(res);

// const numbers = [1, 2, 3, 4, 5];
// const res = numbers.some(test);
// function test(value) {
//   return value > 2;
// }
// console.log(res);

// const numbers = [1, 2, 3, 4, 5];
// const res = numbers.filter(test);
// function test(value) {
//   return value > 3;
// }
// console.log(res);

// const numbers = [1, 2, 3, 4, 5];
// const res = numbers.slice(1, 3);
// console.log(res);

// const numbers = [1, 2, 3, 4, 5];
// const res = numbers.splice(1, 3);
// console.log(res);

// const numbers = [1, 2, 3, 4, 5];
// const res = numbers.find(test);
// function test(value) {
//   return value > 1;
// }
// console.log(res);

// const numbers = [1, 2, 3, 4, 5];
// const res = numbers.indexOf(4);
// console.log(res);

// const numbers = [5, 3, 3, 4, 5];
// const res = numbers.reduce(test, 0);
// function test(acc, value) {
//   return acc + value;
// }
// console.log(res);

// const numbers = [1, 2, 3, 4, 5];
// const res = numbers.pop();
// console.log(res);

// const numbers = [1, 2, 3, 4, 5];
// numbers.push("Akbar");
// console.log(numbers);

const numbers = [1, 2, 3, 4, 5];
numbers.shift();
console.log(numbers);
