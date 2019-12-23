////////////////////////////////////////////////////////////////
// Generics
//
// Documents generics in TypeScript
////////////////////////////////////////////////////////////////

//Example of non-generic collection classes...
class ArrayofNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayofStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

//Or we could create a generic class
class Collection<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

//Create a new instance of our collection...
new Collection<string>(["a", "b", "c"]);
new Collection<number>([1, 2, 3]);

//We can also use type inference here...
//TypeScript picks up on the T type without us needing to add it in
const strings = new Collection(["a", "b", "c"]);
strings.get(0).toLowerCase();

//Example of generics with functions
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printItems<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

//We can call it normally...
printItems<string>(["a", "b", "c"]);
//Once again we could use type inference here...
printItems(["a", "b", "c"]);

//Generic constriants...
class Truck {
  print() {
    console.log("I am a truck");
  }
}

class House {
  print() {
    console.log("I am a house");
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    //arr[i].print();
    //Doesn't work as T is declared dynamically!
  }
}

function printHousesOrCarsWithPrintable<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
    //This now works as T is constrained to printable
  }
}

//printHousesOrCarsWithPrintable<Car>([new Car()]);
//Car does not implement Printable!

printHousesOrCarsWithPrintable<Truck>([new Truck()]);
