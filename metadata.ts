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
Reflect.defineMetadata('note', 'more notes', plane, 'colour');
const propNote = Reflect.getMetadata('note', plane, 'colour')