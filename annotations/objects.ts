////////////////////////////////////////////////////////////////
// Objects
//
// Goes over some examples of annotating a object
////////////////////////////////////////////////////////////////

const person = {
  name: "Andrew",
  age: 26,
  location: {
    lat: 0,
    lng: 10
  },
  setAge(age: number): void {
    this.age = age;
  }
};

//If we wanted to get the age off of the person object, using ES2015 syntax
//     const { age } = person;
//To annotate this, we have to define out the object...
const { age }: { age: number } = person;

//To get location we would start with
//     const { location: { lat, lng } } = person;
//Then annotate it as such
const {
  location: { lat, lng }
}: { location: { lat: number; lng: number } } = person;
