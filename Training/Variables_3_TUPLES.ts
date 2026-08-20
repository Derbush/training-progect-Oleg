// ============================================
// 3. TUPLES
// ============================================
// Tuple Types: Defining fixed-length arrays with specific element types.
//The type keyword in TypeScript creates a type alias, giving a custom name to a fixed-length array with specific types at each index (a tuple)

// Fixed-length array with known types at each position
{
type Coordinate = [number, number];
const point: Coordinate = [10, 20];
// const invalid: Coordinate = [10, 20, 30]; // Error: too many elements


// Tuple with mixed types
type name_Response = [string, number];
const response: name_Response = ["success", 200];

// Tuple with optional elements
type OptionalTuple = [string, number?];
const opt1: OptionalTuple = ["data"];
const opt2: OptionalTuple = ["data", 42];
}
