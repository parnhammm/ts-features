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
@controller
class Plane {
  colour: string = "white";

  @get('/fly')
  fly(): void {
    console.log("Flying");
  }
}

function get(path: string) {
  return function(target: Plane, key: string) {
    Reflect.defineMetadata("path", path, target, key);
  };
}

//Get the data using prototype
const path = Reflect.getMetadata("path", Plane.prototype, "fly");
console.log(`Path is ${path}`);

//Class annotations refer to the constructor of the object...
function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    //Iterate through all the keys on the prototype and
    //see if we can find the secret metadata
    const path = Reflect.getMetadata("path", target.prototype, key);
    console.log(`Path is ${path}`);

    //If we where using express, we could then do something like
    //router.get(path, target.prototype[key]);
  }
}
