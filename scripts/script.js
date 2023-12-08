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

// const numbers = [1, 2, 3, 4, 5];
// numbers.shift();
// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5];
// numbers.unshift("Akbar ");
// console.log(numbers);

// const items = [
//   {
//     name: "Iphone",
//     price: 1000,
//     count: 10,
//   },
//   {
//     name: "Samsung",
//     price: 940,
//     count: 17,
//   },
//   {
//     name: "Xioami",
//     price: 470,
//     count: 44,
//   },
// ];
// const res = items.map((elem) => elem.price * elem.count);
// console.log(res);

// const numbers = [1, 2, 3, 4, 5];
// numbers.pop();
// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5];
// numbers.push(" Akbar");
// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5];
// numbers.shift();
// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5];
// numbers.unshift("Akbar ");
// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5];
// numbers.pop();
// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5];
// numbers.push(" Shuhratullayev");
// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5];
// numbers.shift();
// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5];
// numbers.unshift("Shuhratullayev ");
// console.log(numbers);

// const number1 = [1, 2, 3, 4, 5];
// number1.pop();
// console.log(number1);

// const number2 = [1, 2, 3, 4, 5];
// number2.push(" AAA");
// console.log(number2);

// const number3 = [1, 2, 3, 4, 5];
// number3.shift();
// console.log(number3);

// const number4 = [1, 2, 3, 4, 5];
// number4.unshift("AAA ");
// console.log(number4);

// /////////////////////////////////////////////////

//pop,push,shift,unshift,reduce,includes,
// indexOf,lastIndexOf,map,ForEach,slice,splice,
// every,some,filter,find,findIndex,concat

// console.log(number4);
// const num = number4.reduce((acc, value) => {
//   return acc + value;
// }, 10);

// const num2 = number4.reduce((acc, value) => acc + value, 0);

// console.log(num2);
// console.log(num, number4);

// let s = "G'ayrat\n123";
// console.log(d)

// let r = "dunyo! ";
// let d = `Salom
// ${r}`;
// let t = r + s;
// console.log(t);

// function inc() {
//   //fnjkdsshfs
// }

// const numbers = [1, 2, 3, 4, 5];
// const objects = [
//   {
//     id: 1,
//     name: "A",
//     job: "do'ktir",
//     age: 20,
//   },
//   {
//     id: 2,
//     name: "B",
//     job: "do'ktir1",
//     age: 24,
//   },
//   {
//     id: 3,
//     name: "Alisher",
//     job: "do'ktir",
//     age: 2,
//   },
//   {
//     id: 4,
//     name: "D",
//     job: "do'ktir1",
//     age: 24,
//   },
//   {
//     id: 5,
//     name: "b",
//     job: "do'ktir",
//     age: 20,
//   },
// ];

// const result = numbers.includes(3);

// const result3 = objects.find((obj) =>
//   obj.name.toLocaleLowerCase().includes("c")
// );

// const result2 = numbers.indexOf(1);
// function test(value) {
//   return value.id === 2;
// }
// //findIndex
// console.log(result3);
// // console.log(objects);
// const newObj = {
//   id: 5,
//   name: "c",
// };

// const result2 = objects.findIndex((obj) =>
//   obj.name.toLocaleLowerCase().includes(newObj.name)
// );

// if (result2 < 0) {
//   objects.push(newObj);
// } else {
//   console.log("Bu malumot mavjud");
// }

// let id = 3;

// const result4 = objects.filter((obj, idx) => obj.job === "do'ktir");
// const result5 = objects.filter((obj, idx) => obj.age === 20);
// const result6 = objects.filter((obj, idx) => obj.age === idx);
// const result7 = objects.filter((obj, idx) => obj.id == id);
// console.log(result7);

// const arr = [
//   { id: 1, name: "Alisher", age: 15 },
//   { id: 2, name: "Akmal", age: 20 },
//   { id: 3, name: "Nodir", age: 18 },
//   { id: 4, name: "Olimjon", age: 15 },
//   { id: 5, name: "Eshmat", age: 16 },
//   { id: 6, name: "Toshmat", age: 15 },
// ];

// const mapingArr = arr.map((el, idx) => {
//   if (el.id === 4) {
//     return {
//       ...el,
//       name: "Nodir",
//       job: "dasturchi",
//     };
//   }

//   return el;
// });

// console.log(arr);
// console.log(mapingArr);

// const mapingArr1 = arr.map((el, idx) => {
//   return [el.name];
// });

// console.log(mapingArr1);

// const numbersArr = [1, 2, 3, 4, 5, 6];

// let sum = 0;
// numbersArr.forEach((el, idx) => {
//   // console.log(el * 2);
//   sum = sum + el;
// });

// console.log(sum);

// const arr = [1, 2, 3, 4, 5];
// arr.splice(0, 3); // Bu yerda splice metodi [1, 2, 3] qiymatlarini kesib oladi
// console.log(arr); // Natija [4, 5]

// const arr = [1, 2, 3, 4, 5];
// const res = arr.splice(0, 3); // Bu yerda splice metodi [1, 2, 3] qiymatlarini kesib oladi
// console.log(res); // Natija [1, 2, 3] chiqadi chunki biz splicedan olgan ma'lumotni return qilyapmiz

// const arr = [1, 2, 3, 4, 5];
// arr.splice(0, 3, "Akbar"); // Bu yerda splice metodi [1, 2, 3] qiymatlarini kesib oladi va 3 parametr natijadan oldinga massiv qo'shadi
// console.log(arr); // Natija ["Akbar", 4, 5] chiqadi chunki biz splicedan olgan ma'lumotni return qilmayapmiz

// const arr = [
//   {
//     name: "A",
//   },
//   {
//     name: "B",
//   },
// ];
// const res = arr.slice(1); // Ko'rsatilgan index bo'yicha return qiladi
// console.log(res); // Index bo'yicha olib natijani [{name:"B"}] qilib qaytaradi

// const arr = [
//   {
//     name: "A",
//   },
//   {
//     name: "B",
//   },
// ];
// arr.slice(0, 1, "Akbar"); // Ko'rsatilgan index bo'yicha return qiladi va 3 parametr qabul qilmaydi
// console.log(arr); // Index bo'yicha olib natijani to'liq consolega chiqaradi

// const arr = [1, 2, 3, 4, 5];
// arr.slice(0, 3, "Akbar");
// console.log(arr); // returnsiz qiymat ko'rsatmaydi va natija default holatda chiqadi

// const numbers = [1, 2, 3, 4, 5];
// numbers.splice(0, 3, 10,"Ali");
// console.log(numbers);















