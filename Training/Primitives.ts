// The seven primitives in TypeScript are string, number, boolean, bigint, symbol, null, and undefined

// string: Represents textual data enclosed in single quotes, double quotes, or backticks.
// number: Represents all numeric values, including integers and floating-point numbers (let price: number = 19.99; let distance: number = 0.005). JavaScript and TypeScript do not have distinct int or float
// types.boolean: Represents a logical binary value, which can only be true or false.
// bigint: Represents whole numbers larger than 2⁵³ - 1 (9,007,199,254,740,991). They are created by adding an n to the end of an integer literal (e.g., 100n).
// symbol: Represents a globally unique, immutable identifier typically used as hidden keys for object properties.
// null: Represents an intentional, explicit absence of any value.
// undefined: Represents a variable that has been declared but not yet assigned a value

const username: string = "Alice";
const user_age: number = 30;
const isActive: boolean = true;
const hugeNumber: bigint = 9007199254740991n;
const uniqueKey: symbol = Symbol("id");
const emptyValue: null = null;
const notDefined: undefined = undefined;