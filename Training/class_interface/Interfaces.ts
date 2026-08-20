// Define first interface
export interface Animal {
  name: string;
  age: number;
  eat(): void;
}

// Define second interface
export interface Swimmer {
  swimSpeed: number;
  swim(): void;
}

export interface Dog_Spec {
  bread: string;
}
