// use {} to create a local scope

/*
= reassign
== doesn't compare data type
===   equal value and type
!==   not equal value or type
>     greater than
<     less than
>=    greater than or equal to
<=    less than or equal to
*/

{
  const age = 25;

  console.log(age === 25); // true
  console.log(age !== 30); // true

  console.log(5 == "5"); // true
  console.log(5 === "5"); // false

  const user1 = { name: "John" };
  const user2 = { name: "John" };

  console.log(user1 === user2); // false
  console.log(user1 == user2); // false
}