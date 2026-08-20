{
// ============================================
// 2. ARRAYS
// ============================================

// Array declaration with type annotation
{
const name_numbers: number[] = [1, 2, 3, 4, 5];
const name_numbersAlt: Array<number> = [1, 2, 3]; // Alternative syntax
console.log(" name_numbers " + name_numbers);
console.log(" name_numbersAlt " + name_numbersAlt);


const name_strings: string[] = ["a", "b", "c"];
const name_booleans: boolean[] = [true, false, true];
console.log(" name_strings " + name_strings);
console.log(" name_booleanst " + name_booleans);

// Mixed type array (union type)
const name_mixed: (number | string)[] = [1, "two", 3, "four"];

// Array of objects
interface User {
  id: number;
  name: string;
  email: string;
}

const name_users: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
];

// Array methods

/*
map()	Transform each element	-> NEW array	
filter()	Keep matching elements	-> NEW array	
reduce()	Combine into single value	-> Single value	
forEach()	Run function on each -> undefined	
find()	Get first match	-> First match	
findIndex()	Get index of first match ->	Index number	
some()	Any match? -> true/false	
every()	All match?	-> true/false	
includes()	Value exists? ->	true/false	
indexOf()	Find value index ->	Index or -1	
slice()	Get portion	-> NEW array	
splice()	Remove/add items	-> Removed items	
sort()	Sort	-> Sorted array	
reverse()	Reverse order	-> Reversed array	
join()	Convert to string	-> String	
*/

console.log(" name_numbers " + name_numbers);
const name_doubled = name_numbers.map((n) => n * 2); // [2, 4, 6, 8, 10]
console.log(" name_doubled " + name_doubled);

const name_evens = name_numbers.filter((n) => n % 2 === 0); // [2, 4]
console.log(" name_evens " + name_evens);

//const name_numbers: number[] = [1, 2, 3, 4, 5];
const name_sum = name_numbers.reduce((acc, n) => acc + n, 0); // 15
console.log(" name_sum " + name_sum);
const name_sum_2 = name_numbers.reduce((acc, n) => acc + n, 2); // 17
console.log(" name_sum_2 " + name_sum_2);


}

}
