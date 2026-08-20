{
  console.log("Hello World!");

  let a = 10;
  let b;
  let c = null;

  console.log("a " + a);
  console.log("b " + b);
  console.log("c " + c);

  b = a;
  console.log("b " + b);

  const d = 100;
  console.log(`d равно ${d}`);

  // d = 200;

  let f = 10;

  // console.log("a = f: " + (a = f));
  console.log("a == f: " + (a == f));
  console.log("a === f: " + (a === f));

  //Array
  let skills: string[] = ["Coding", "Testing", "Debugging"];
  console.log("достать индекс " + skills.indexOf("Coding"));
  console.log("достать skill по индексу " + skills[1]);

  // Loop Array
  for (const skill of skills) {
    console.log(skill.toUpperCase());
  }

  //Map
  let userRoles: Map<string, number> = new Map();
  const primaryKey = "admin";
  const defaultRoleLevel = 1;
  userRoles.set(primaryKey, defaultRoleLevel);
  userRoles.set("editor", 2);

  console.log("userRoles.get(primaryKey) " + userRoles.get(primaryKey));
  console.log("userRoles.get(guest) " + userRoles.get("guest"));

  // Loop Map
  for (let [id, role] of userRoles) {
    console.log(`User ID: ${id}, Role: ${role}`);
  }
}

