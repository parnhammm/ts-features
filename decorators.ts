////////////////////////////////////////////////////////////////
// Decorators
//
// Documents decorators in typescript (still experimental)
//
// Decorators on a property, method, accessor:
//   * First argument is the prototype of the object
//   * Second argumant is the key of the property/method/accessor on the object
//   * Third argumnet is the property descriptor
//   * Decorators are applied when the code is ran, not when an instance is created
////////////////////////////////////////////////////////////////

@classDecorator
class Boat {
  //Property
  colour: string = "white";

  //Accessor
  get formattedColour(): string {
    return `This boats colour is ${this.colour}`;
  }

  //Method
  @logError
  pilot(): void {
    throw new Error("blah");
  }

  @logErrorFactory("Error thrown in pilotWithDecorator")
  pilotWithDecorator(): void {
    throw new Error("bleh");
  }

  methodWithArg(@parameterDecorator myString: string): void {
    console.log(myString);
  }
}

function classDecorator(constructor: Function) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  //Now a reference to pilot()
  const method = desc.value;

  desc.value = function() {
    try {
      method();
    } catch (e) {
      console.log("Error caught: " + e);
    }
  };
}

//Decorator factory allows you to customise the decorator further
function logErrorFactory(errorMessage: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    //Now a reference to pilot()
    const method = desc.value;

    desc.value = function() {
      try {
        method();
      } catch (e) {
        console.log("Error caught: " + errorMessage);
      }
    };
  };
}
