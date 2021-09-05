//! ///////////////////////////////////////////
//! ///////////////////////////////////////////
//! Array Methods Exercise 01
// {
//   Development: 2,
//   Marketing: 1
// }
const people = [
  {
    firstName: "Sam",
    lastName: "Hughes",
    DOB: "07/07/1978",
    department: "Development",
    salary: "45000",
  },
  {
    firstName: "Terri",
    lastName: "Bishop",
    DOB: "02/04/1989",
    department: "Development",
    salary: "35000",
  },
  {
    firstName: "Jar",
    lastName: "Burke",
    DOB: "11/01/1985",
    department: "Marketing",
    salary: "38000",
  },
  {
    firstName: "Julio",
    lastName: "Miller",
    DOB: "12/07/1991",
    department: "Sales",
    salary: "40000",
  },
  {
    firstName: "Chester",
    lastName: "Flores",
    DOB: "03/15/1988",
    department: "Development",
    salary: "41000",
  },
  {
    firstName: "Madison",
    lastName: "Marshall",
    DOB: "09/22/1980",
    department: "Sales",
    salary: "32000",
  },
  {
    firstName: "Ava",
    lastName: "Pena",
    DOB: "11/02/1986",
    department: "Development",
    salary: "38000",
  },
  {
    firstName: "Gabriella",
    lastName: "Steward",
    DOB: "08/26/1994",
    department: "Marketing",
    salary: "46000",
  },
  {
    firstName: "Charles",
    lastName: "Campbell",
    DOB: "09/04/1977",
    department: "Sales",
    salary: "42000",
  },
  {
    firstName: "Tiffany",
    lastName: "Lambert",
    DOB: "05/11/1990",
    department: "Development",
    salary: "34000",
  },
  {
    firstName: "Antonio",
    lastName: "Gonzalez",
    DOB: "03/24/1985",
    department: "Office Management",
    salary: "49000",
  },
  {
    firstName: "Aaron",
    lastName: "Garrett",
    DOB: "09/04/1985",
    department: "Development",
    salary: "39000",
  },
];

// Exercises

// Array.prototype.reduce()
// 1) What is the average income of all the people in the array?
const salaryAvg =
  people.reduce((acc, person) => acc + parseInt(person.salary), 0) /
  people.length;

console.log(salaryAvg.toFixed());

// console.log(
//   [1, 2, 3].reduce((accumulator, current) => accumulator + current, 0)
// );

// 0
// 1 1
// 2 3
// 3 6
// 4 10
// 5 15

// 2) Who are the people that are currently older than 30?

console.log(new Date("07-07-1978").getFullYear());

const olderThan30 = people
  .filter(
    ({ DOB }) => new Date().getFullYear() - new Date(DOB).getFullYear() > 30
  )
  .map(({ firstName, lastName }) => `${firstName} ${lastName}`);

console.log(String(olderThan30));

// console.log([1,2,3,[4,5,[6,7,[8,9]]]].flat(Infinity))

// 3) Get a list of the people's full name (firstName and lastName).

const fullName = people.map((person) => ({
  ...person,
  fullName: `${person.firstName} ${person.lastName}`,
}));
console.log(fullName);

// 4) Get a list of people in the array ordered from youngest to oldest.
// console.log([1, 5, 2, 3, 8].sort((a, b) => a > b ? 1 : -1));

const peopleSorted = people.sort(
  (personA, personB) =>
    new Date(personA.DOB).getFullYear() - new Date(personB.DOB).getFullYear()
);
console.log(peopleSorted);

// 5) How many people are there in each department?

// {
//   development: 3,
//   marketing: 2,
//   sales: 5,
// }

const peoplePerDep = people.reduce(
  (acc, person) => ({
    ...acc,
    [person.department]: acc[person.department] + 1 || 1,
  }),
  {}
);

const peoplePerDep = people.reduce((obj, person) => {
  if (!obj[person.department]) {
    obj[person.department] = 0;
  }
  obj[person.department]++;
  return obj;
}, {});

console.log(peoplePerDep);

const mySelf = {
  name: "Barak Obama",
  gender: "male",
};
// mySelf.age = 45;
mySelf["age"] = 100;

mySelf["age"]++;
mySelf["age"]--;
// mySelf."age/"

console.log(mySelf.name);
console.log(mySelf["name"]);

console.log(mySelf);
