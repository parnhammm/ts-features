////////////////////////////////////////////////////////////////
// Tuples
//
// Documents the idea of a tuple in typescript
////////////////////////////////////////////////////////////////

const drink = {
  colour: "brown",
  carbonated: true,
  sugar: 40
};

//To represent this as an array we could do the following
//Where it would be understood that the order of elements represents the properties
let pepsi = ["brown", true, 40];

//However this could be broken by reordering elements
pepsi[0] = 40;
pepsi[2] = "brown";

//To transform this into a tuple, we can use type annotations to get around this
let coke: [string, boolean, number] = ["brown", true, 40];

//To save us from having to repeat this type annotation we can create a type alias
type Drink = [string, boolean, number];

let sprite: Drink = ["clear", true, 30];
let tea: Drink = ["brown", false, 0];
let coffee: Drink = ["black", false, 0];

////////////////////////////////////////////////////////////////
//However the idea of tuples have limited uses.. for example
////////////////////////////////////////////////////////////////
let carSpecs: [number, number] = [400, 3354];

//To another engineer these are just two random numbers with no context, these are far better
//written in an object structure
const bmw = {
  bhp: 400,
  weight: 3354
};
