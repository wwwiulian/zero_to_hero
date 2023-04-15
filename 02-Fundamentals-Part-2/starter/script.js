"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive a car!')

// function name(parameter1, parameter2) {
//     console.log(parameter1, parameter2)
// };

// function calcAge1(birthYear) {
//     return 2022 - birthYear;
// };

// const age1 = calcAge1(1988);
// console.log(age1)

// const calcAge2 = function (birthYear) {
//     return 2022 - birthYear;
// };

// const age2 = calcAge2(1988);

// console.log(age2);

// const calcAge3 = birthYear => 2022 - birthYear;

// const age3 = calcAge3(1988);

// console.log(age3)

// const yearsUntilRetirement = (birthYear, name) => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     return `${name} retires in ${retirement}`;
// };

// console.log(yearsUntilRetirement(1988, 'Iulian'));

// const friends = ['Andrei', ' Ion', 'Moise'];

// const newLength = friends.push('Cosmin');
// friends.push(23);
// console.log(friends.indexOf(23));

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2005 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// // Challange
// const test = `${jonas.firstName} has ${jonas['friends'].length} friends and his best friend is called ${jonas.friends[0]}`;
// console.log(test);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     driverLicense: true,
//     friends: ['Michael', 'Peter', 'Steven'],
//     calcAge: function () {
//         this.age = 2022 - this.birthYear;
//     },
//     getSummary: function () {
//         const test = `${this.firstName} is a ${this.age} year old ${this.job} and ${this.driverLicense ? 'has drivers license.' : "doesn't have driver's license."} `
//         return test;
//     }
// };

// jonas.calcAge();
// console.log(jonas.getSummary());

// const jonas = [
//     'Schmedtman',
//     'Jonas',
//     1991,
//     'teacher'
// ];
// console.log('---------continue-------')
// const arr = [];
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;

//     console.log(jonas[i], typeof jonas[i]);
// }

// console.log('------break---------')
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break;

//     console.log(jonas[i], typeof jonas[i]);
// }

// const jonas = [
//     'Schmedtman',
//     'Jonas',
//     1991,
//     'teacher',
//     ['Michael', 'Peter', 'Stephen']
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// };

// let rep = 1;

// while (rep <= 10) {
//     console.log(`Lifting weights repetition ${rep}`);
//     rep++;
// };

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//     console.log(`You rolled ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
// }

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const tipPerc = function (x) {
  if (x > 50 && x < 300) {
    return x * 0.15;
  } else {
    return x * 0.2;
  }
};

const calcTip = function (bill) {
  for (let i = 0; i < bills.length; i++) {
    const tip = tipPerc(bill[i]);
    const total = bill[i] + tip;
    tips.push(tip);
    totals.push(total);
  }
};

calcTip(bills);
console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum / arr.length);
};

calcAverage(tipsgit);
