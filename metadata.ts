////////////////////////////////////////////////////////////////
// Metadata
//
// Documents the idea of a metadata in typescript (Experimental at time of writing!)
//
// Requires experimental options enabled in tsconfig!!!!
////////////////////////////////////////////////////////////////

//Adds Reflect to the global scope
import "reflect-metadata";

const plane = {
  colour: "red"
};

//Adding in a new meta data property called note, with the value of 'this is a note'
//Note this will never show up in debuggers etc.
Reflect.defineMetadata("note", "this is a note", plane);

const metaDataRetrieved = Reflect.getMetadata("note", plane);
console.log(metaDataRetrieved);

//We can associate metadata to a property as well
Reflect.defineMetadata("note", "more notes", plane, "colour");
const propNote = Reflect.getMetadata("note", plane, "colour");

//Classes with decorators...
@printMetaData
class Plane {
  colour: string = "white";

  @markFunction("abc123")
  fly(): void {
    console.log("Flying");
  }
}

function markFunction(secretInfo: string) {
  return function(target: Plane, key: string) {
    Reflect.defineMetadata("secret", secretInfo, target, key);
  };
}

//Get the data using prototype
const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");
console.log(`Secret is ${secret}`);

//Class annotations refer to the constructor of the object...
function printMetaData(target: typeof Plane) {
  for (let key in target.prototype) {
    //Iterate through all the keys on the prototype and
    //see if we can find the secret metadata
    const secret = Reflect.getMetadata("secret", target.prototype, key);
    console.log(`Secret is ${secret}`);
  }
}
