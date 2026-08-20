// ============================================
// 4. MAPS
// ============================================

// Map - key-value pairs where keys can be any type
{
const mapExample: Map<string, number> = new Map();

// Adding elements
mapExample.set("apple", 5);
mapExample.set("banana", 3);
mapExample.set("orange", 7);

// Getting elements
console.log(mapExample.get("apple")); // 5

// Checking existence
console.log(mapExample.has("banana")); // true
console.log(mapExample.has("grape")); // false

// Getting size
console.log(mapExample.size); // 3

// Deleting elements
mapExample.delete("banana");

// Clearing all elements
// mapExample.clear();

// Map with different key types
const userMap: Map<number, string> = new Map();
userMap.set(1, "Alice");
userMap.set(2, "Bob");
userMap.set(3, "Charlie");

// Complex value types
interface Product {
  name: string;
  price: number;
}

const productMap: Map<string, Product> = new Map();
productMap.set("SKU001", { name: "Laptop", price: 999 });
productMap.set("SKU002", { name: "Mouse", price: 25 });

}
