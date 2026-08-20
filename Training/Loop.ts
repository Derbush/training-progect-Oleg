{ 
  // ============================================
// 5. LOOPING THROUGH COLLECTIONS
// ============================================

{

console.log("\n--- LOOPING EXAMPLES ---\n");

// Loop through ARRAYS

const numbers: number[] = [1, 2, 3, 4, 5];


// 1. for loop (traditional)
for (let i = 0; i < numbers.length; i++) {
  console.log(`Array[${i}]: ${numbers[i]}`);
}


// 2. forEach
numbers.forEach((value, index) => {
  console.log(`forEach[${index}]: ${value}`);
});



// Loop through OBJECTS in an ARRAY

// Loop through TUPLES
type Person = [string, number, string]; // name, age, city
const people: Person[] = [
  ["Alice", 30, "New York"],
  ["Bob", 25, "London"],
  ["Charlie", 35, "Tokyo"],
];

people.forEach(([name, age, city]) => {
  console.log(`${name}, age ${age}, from ${city}`);
});

// Loop through MAPS

console.log("\n--- Looping through Maps ---\n");

const mapExample: Map<string, number> = new Map();

// Adding elements
mapExample.set("apple", 5);
mapExample.set("banana", 3);
mapExample.set("orange", 7);


// 1. Using forEach
mapExample.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// 2. Using for...of with entries()
for (const [key, value] of mapExample.entries()) {
  console.log(`Entry - ${key}: ${value}`);
}

// 3. Just keys
for (const key of mapExample.keys()) {
  console.log(`Key: ${key}`);
}

// 4. Just values
for (const value of mapExample.values()) {
  console.log(`Value: ${value}`);
}

}
}