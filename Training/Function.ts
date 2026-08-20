// ============================================
// PRACTICAL EXAMPLE - COMBINING CONCEPTS
// ============================================

// interface -  Он описывает структуру объекта, включая имена свойств и функций. Интерфейс может определять функции или методы, которые должен иметь объект, но он не может содержать фактический код или логику этих функци
// class - шаблон для создания объектов. Он описывает данные (свойства) и действия (методы), которые будут у этих объектов
// function - ,kjr rjlf c kjubrjq rjnjhsq bcgjkmpetncz vyjuj hfp

{
  // Пример #1

  interface Order {
    id: number;
    product: string;
    quantity: number;
  }

  function processOrders(orders: Order[]): void {
    const orderMap: Map<number, Order> = new Map();

    // loop & set key & value
    orders.forEach((order) => {
      orderMap.set(order.id, order);
    });

    // Process each order
    for (const [id, order] of orderMap.entries()) {
      console.log(`Order ${id}: ${order.quantity}x ${order.product}`);
    }
  }

  const orders: Order[] = [
    { id: 1, product: "Laptop", quantity: 2 },
    { id: 2, product: "Mouse", quantity: 5 },
    { id: 3, product: "Keyboard", quantity: 3 },
  ];

  processOrders(orders);

  // Пример #2
  {

  // 1. INTERFACE - Defines what something should look like
  interface User {
    name: string;
    age: number;
    email: string;
  }

  // Now any object typed as User must have these properties
  const user: User = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
  };
  console.log(user);

}

{

  // CLASS - Creates objects with actual logic

  class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    getInfo(): string {
      return `${this.name} is ${this.age} years old`;
    }
  }

  const user = new User("Bob", 25);
  console.log(user.getInfo()); // Bob is 25 years old

}
{
  // 3. FUNCTION - Reusable code block
  function calculateAge(birthYear: number): number {
    return new Date().getFullYear() - birthYear;
  }

  console.log(calculateAge(1995)); // 29
}

}