function greet(person: string, date: Date): string {
  console.log(`Hello, ${person}, today is ${date.toDateString()}`);
  return `Hello, ${person}, today is ${date.toDateString()}`;
}

let message = greet("John Doe", new Date());
console.log(message);