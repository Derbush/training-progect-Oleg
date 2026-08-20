import { Animal, Dog_Spec } from "./Interfaces";

// Class implements BOTH interfaces
class Dog implements Animal, Dog_Spec {
  name: string;
  age: number;
  bread: string;

  constructor(name: string, age: number, bread: string) {
    this.name = name;
    this.age = age;
    this.bread = bread;
  }

  // From Animal interface
  eat(): void {
    console.log(`${this.name} is eating meat`);
  }

  // From Swimmer interface
  bark(): void {
    console.log(`${this.name} knows how to bark`);
  }
}
