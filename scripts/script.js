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

const isReduce = [1, 2, 3, 4, 5];
const total = isReduce.reduce(result, 0);
function result(acc, value) {
  return acc + value;
}
console.log(total);

const numbers = [1, 2, 3, 4, 5];
numbers.pop();
console.log(numbers);