////////////////////////////////////////////////////////////////
// Interfaces
//
// Documents interfaces in typescripe
////////////////////////////////////////////////////////////////

//Start with an plain object
const oldCivic = {
  name: "Civic",
  year: 2000,
  broken: true
};

//Now lets create a function to print details about a vehicle out
//To avoid the 'any' type, we will need to create a object literal
const printVehicleDetails = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`
      Name: ${vehicle.name}
      Year: ${vehicle.year}
      Broken: ${vehicle.broken}
  `);
};

printVehicleDetails(oldCivic);

//However the problem here is threefold:
// (1) the type annotation is really long and hard to read
// (2) if we add more properties we will have to do a lot more refactoring
// (3) we would need to repeat this long annotation everytime we want to use it

//Rewrite this using an interface
interface Reportable {
  summary(): string;
}

const newCivic = {
  name: "Civic",
  year: 2019,
  broken: false,
  summary(): string {
    return `
      Name: ${this.name}
      Year: ${this.year}
      Broken: ${this.broken}
    `;
  }
};

const printReportableSummary = (reportable: Reportable): void => {
  console.log(reportable.summary());
};

printReportableSummary(newCivic);
