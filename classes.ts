////////////////////////////////////////////////////////////////
// Classes
//
// Documents classes in TypeScript
////////////////////////////////////////////////////////////////

class Vehicle {
  //Equvilent to the below implementation...
  constructor(protected status = "Running") {}

  // protected status: string;

  // constructor(status = "Running") {
  //   this.status = status;
  // }

  public drive(): void {
    console.log("Driving...");
  }

  protected soundHorn(): void {
    console.log("Sounding horn....");
  }

  private reportStatus(): string {
    return this.status;
  }
}

//Overriding...
class Car extends Vehicle {
  constructor(public numOfWheels = 4, status = "Running") {
    super(status);
  }

  drive(): void {
    console.log("Car driving...");
  }
}
