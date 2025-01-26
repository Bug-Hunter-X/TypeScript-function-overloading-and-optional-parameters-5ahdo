function greet(person: string, date?: Date): string;
function greet(person: string, date: Date = new Date()): string {
  console.log(`Hello, ${person}, today is ${date.toDateString()}`);
  return `Hello, ${person}, today is ${date.toDateString()}`;
}

let message = greet("John Doe");
console.log(message);

let message2 = greet("Jane Doe", new Date());
console.log(message2);