/*
*Exercise - 1
Write a javascript program to check two numbers
and return true if one of the number is 100 or
if the sum of the two numbers is 100
*/

const isEqual = (a, b) => a === 100 || b === 100 || a + b === 100;

console.log(isEqual(50, 20));
console.log(isEqual(100, 20));
console.log(isEqual(80, 20));

/*
*Exercise - 2
Write a javascript program to get the
extension of a file name
*/

const getExtension = (str) => str.slice(str.lastIndexOf("."));

console.log(getExtension("inde.html"));
console.log(getExtension("govt.bd.com"));

/*
*Exercise - 3
Write a javascript program to find out which one of given
to values is nearest to 100.
*/

// const closeTo100 = (a, b) => {
//   if (100 - a < 100 - b) {
//     return a;
//   } else {
//     return b;
//   }
// };

const closeTo100 = (a, b) => (100 - a < 100 - b ? a : b);

console.log(closeTo100(20, 50));
console.log(closeTo100(89, 90));

/*
*Exercise - 4
Write a javascript program to get the current date.
Expected Outputs:
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

const formatDate = (date = new Date()) => {
  const days = date.getDate();
  const months = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${days}/${months}/${year}  ${hours}:${minutes}`;
};

console.log(formatDate());
/*
*Exercise - 5
Write a javascript program to create a new string
adding "New!" in front of a given string. If the
given string begins with "New!" already then return
the original string.
*/

const addNew = (str) => (str.lastIndexOf("New!") === 0 ? str : `New! ${str}`);

console.log(addNew("New! Offer"));
console.log(addNew("Offer"));

// Array methods
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// Array.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

// const fifteen = (inventors) => {
//   return inventors.filter((inventor) => {
//     return inventor.year >= 1500 && inventor.year < 1600;
//   });
// };

const fifteen = (inventors) =>
  inventors.filter(({ year }) => year >= 1500 && year < 1600);

console.log(fifteen(inventors));

// Array.map()
// 2. Give us an array of the inventor first and last names

const getFullName = (inventors) =>
  inventors.map(({ first, last }) => `${first} ${last}`);

console.log(getFullName(inventors));

// Array.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

// const orderedInventor = (inventors) => {
//   return inventors.sort((a, b) => {
//     if (a.year > b.year) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
// };

const orderedInventor = (inventors) =>
  inventors.sort((a, b) => (a.year > b.year ? 1 : -1));

console.log(orderedInventor(inventors));

// const arr = [2, 5, 10, 9];
// console.log(
//   arr.sort((a, b) => {
//     if (a < b) {
//       return 1;
//     } else {
//       return -1;
//     }
//   })
// );

// Array.reduce()
// 4. How many years did all the inventors live?

const totalYears = (arr) =>
  arr.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
  }, 0);

console.log(totalYears(inventors));

// 5. Sort the inventors by years lived

// const oldest = (arr) =>
//   arr.sort((a, b) => {
//     const last = a.passed - a.year;
//     const next = b.passed - b.year;
//     return last < next ? 1 : -1;
//   });

const oldest = (arr) =>
  arr.sort((a, b) => (a.passed - a.year < b.passed - b.year ? 1 : -1));
console.log(oldest(inventors));

// 6. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

// {
//   car: 5,
//   walk: 3,
// }

const transportations = (arr) =>
  arr.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;

    return obj;
  }, {});

console.log(transportations(data));

// const me = {
//   name: 0,
//   gender: "male"
// }

// me["canSwime"] = false;
// me["name"]++
// me["name"]++
// me["name"]++
// me["name"]++
// console.log(me["name"]);
