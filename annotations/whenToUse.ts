////////////////////////////////////////////////////////////////
// When to use annotations
//
// Goes over some examples of when we should use type annotations
// as opposed to relying on typescripes type inference
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// Scenario (1): When a function returns the 'any' type
////////////////////////////////////////////////////////////////
const json = '{"x":10, "y":20}';
const result = JSON.parse(json);
console.log(result); //Would return {"x":10, "y":20}

//However result is of type 'any' so we can do no type checking on it, as such
result.notARealFunction();

//To fix, we add an object literal annotation
const jsonV2 = '{"x":10, "y":20}';
const resultAnnotated: { x: number; y: number } = JSON.parse(json);
console.log(resultAnnotated); //Would return {"x":10, "y":20}

////////////////////////////////////////////////////////////////
// Scenario (2): When we declare a variable on one line and initialise it later
////////////////////////////////////////////////////////////////
const colours = ["red", "blue", "yellow", "green", "purple"];
let foundGreen;

colours.forEach(function(element) {
  if (element === "green") {
    foundGreen = true;
  }
});

//We can see that foundGreen is of type 'any' which we want to avoid, so to fix this
//We should add an annotation
let foundGreenAnnotated: boolean;

colours.forEach(function(element) {
  if (element === "green") {
    foundGreenAnnotated = true;
  }
});

////////////////////////////////////////////////////////////////
// Scenario (3): Variable whose type cannot be inferred correctly
////////////////////////////////////////////////////////////////

//We want to loop over an array and if a number is above zero, assign it to
//numberAboveZero, otherwise return false
const numbers = [-1, -10, 10];
let numberAboveZero = false;

//    numbers.forEach(element => {
//      if (element > 0) {
//        //Typescript has infered that numberAboveZero is a boolean!
//        numberAboveZero = element;
//      }
//    });

//To fix, we can rewrite with an anotation that expresses this
let numberAboveZeroAnnotated: boolean | number = false;
numbers.forEach(element => {
  if (element > 0) {
    numberAboveZeroAnnotated = element;
  }
});
