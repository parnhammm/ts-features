//Primitives
const myString: string = "Some string";
const myNumber: number = 7;
const myBoolean: boolean = true;
const myNull: null = null;
const myUndefined: undefined = undefined;

//Built in objects
const now: Date = new Date();

//Arrays
const arrayOfStrings: string[] = ["hello", "world"];
const arrayOfNumbers: number[] = [1, 2, 3];
const arrayOfBooleans: boolean[] = [true, false];

//Classes
class Car {}
const myCar: Car = new Car();

//Object literals
//Note that here we have to fully define out what our object is for typescript
let point: { x: number; y: number; z: number } = {
  x: 0,
  y: 0,
  z: 0
};

//Functions

//Without any annotations the function declaration would look like this...
const logNumberNoAnnotation = (i: number) => {
  console.log(i);
};

//We want to annotate what arguments the function takes and the
//return types we expect. We give this function a number, and return nothing
//so here we will use a special type of 'void'
const logNumberWithAnnotation: (i: number) => void = (i: number) => {
  console.log(i);
};
