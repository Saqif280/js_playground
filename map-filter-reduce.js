// data
const animals = [
  {
    "name": "cat",
    "size": "small",
    "weight": 5
  },
  {
    "name": "dog",
    "size": "small",
    "weight": 10
  },
  {
    "name": "lion",
    "size": "medium",
    "weight": 150
  },
  {
    "name": "elephant",
    "size": "big",
    "weight": 5000
  }
];

// --------------------
// --- MAP FUNCTION ---
// --------------------

// for loop
// let animal_names = [];
//
// for (let i = 0; i < animals.length; i++) {
//   animal_names.push(animals[i].name);
// }

// OR

// map function:
// Callback function params ...
// 1. The current item of the array
// 2. The current index of the current item
// 3. The entire array
let animal_names = animals.map((animal, index, animals) => {
  return animal.name;
});

// or

let animal_names = animals.map((animal, index, animals) => animal.name );

// --------------------
// --- MAP FUNCTION ---
// --------------------

// for loop
// let small_animals = [];
//
// for (let i = 0; i < animals.length; i ++) {
//     if (animals[i].size === "small") {
//         small_animals.push(animals[i]);
//     }
// }

// OR

// filter function:
// Callback function params ...
// 1. The current item of the array
// 2. ... [same as before]
// 3. ...
let small_animals = animals.filter((animal) => {
  return animal.size === 'small'; // must return boolean of current item
});

// or

let small_animals = animals.filter((animal) => animal.size === 'small');

// --------------------
// --- REDUCE FUNCTION ---
// --------------------

// for loop
// let total_weight = 0;
//
// for (let i = 0; i < animals.length; i++) {
//     total_weigth += animals[i].weight;
// }

// OR

// reduce function:
// Callback function params ...
// 1. Thing we're summing
// 2. 1 from before
// 3. 2 from before
// 4. 3 from before
let total_weight = animals.reduce((weight, animal, index, animals) => {
  return weight += animal.weight
});

// or

let total_weight = animals.reduce((weight, animal, index, animals) => weight += animal.weight );
