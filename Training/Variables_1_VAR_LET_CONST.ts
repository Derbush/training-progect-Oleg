// ============================================
// 1. VAR vs LET vs CONST
// ============================================

// VAR - Function scoped (old way, avoid using)

{
function varExample() {
  if (true) {
    var x = 10;
  }
  console.log(" x = " + x); // 10 - var leaks out of block scope
}

// LET - Block scoped (preferred for reassignable variables)
function letExample() {
  if (true) {
    let y = 20;
  }
 //  console.log(y); // Error: y is not defined
}

// CONST - Block scoped, cannot be reassigned (preferred default)
function constExample() {
  const z = 30;
  // z = 40; // Error: assignment to constant variable

  // BUT: const objects can have their properties modified
  const obj = { name: "Alice" };
  obj.name = "Bob"; // ✓ This works
  // obj = {}; // ✗ This would fail

  console.log("obj.name = " + obj.name);
}

  // var: "Function scoped, can be redeclared, avoid using",
  // let: "Block scoped, can be reassigned, good for variables",
  // const: "Block scoped, cannot be reassigned, use by default",


// CALL THE FUNCTIONS!
varExample(); // Prints: x = 10
letExample(); // No output
constExample(); // Prints: obj.name = Bob

}