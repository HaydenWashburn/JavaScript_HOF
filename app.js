console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function plus(number) {
  return (plusNumber) => {
    return plusNumber + number;
  };
}
let plusFifteen = plus(15);
console.log(plusFifteen(10));

// Exercise 2 Section
const users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

users.forEach((hobbits) => {
  console.log(hobbits.name);
});

// Exercise 3 Section

const namesAndScores = users.map((users) => {
  return { name: users.name, score: users.score };
});
console.log(namesAndScores);

// Exercise 4 Section

const activeUsers = users.filter((users) => {
  return users.isActive;
});
console.log(activeUsers);

// Exercise 5 Section

users.sort((user1, user2) => user2.score - user1.score);
console.log(users);


// Exercise 6 Section
let total = users.reduce((sum, users) => {
    return sum + users.score
}, 0)

let average = total/users.length

console.log(total)
console.log(average)
