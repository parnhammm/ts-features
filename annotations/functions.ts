////////////////////////////////////////////////////////////////
// Functions
//
// Goes over some examples of annotating a function
////////////////////////////////////////////////////////////////

//Our first implementation have two arguments that are of 'any', so lets give them annotations
const addV1 = (a, b) => {
  return a + b;
};

//Now with our annotations, typescript can infer the return type of this function
const addV2 = (a: number, b: number) => {
  return a + b;
};

//To improve further, we can explicitly declare the return type
//Note the colon number after the argument list
const addV3 = (a: number, b: number): number => {
  return a + b;
};

//This is helpful when we expect a function to return, as without an explictly declared
//return type Typescript will infer a return of void as below...
const addV4 = (a: number, b: number) => {
  a + b;
};

//However if we had explictly declared a return type, Typescript would throw an error when
//we didn't return!
const addV5 = (a: number, b: number): number => {
  a + b;
};
