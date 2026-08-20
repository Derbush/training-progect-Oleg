import { Animal, Swimmer } from "./Interfaces";

// Class implements BOTH interfaces
export class Dolphin implements Animal, Swimmer {
  name: string;
  age: number;
  swimSpeed: number;

  constructor(name: string, age: number, swimSpeed: number) {
    this.name = name;
    this.age = age;
    this.swimSpeed = swimSpeed;
  }

  // From Animal interface
  eat(): void {
    console.log(`${this.name} is eating fish`);
  }

  // From Swimmer interface
  swim(): void {
    console.log(`${this.name} swims at ${this.swimSpeed} km/h`);
  }
}
