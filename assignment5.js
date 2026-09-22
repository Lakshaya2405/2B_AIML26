class Vehicle {
  constructor(vehicleNo, driverName, distance) {
    this.vehicleNo = vehicleNo;
    this.driverName = driverName;
    this.distance = distance;
  }
  calculateFare() {
    console.log("Fare calculation not defined for generic vehicle.");
    return 0;
  }
  static displayPlatformName() {
    console.log("=== Welcome to QuickRide Booking Platform ===");
  }
  displayDetails() {
    console.log(`Vehicle No: ${this.vehicleNo}`);
    console.log(`Driver Name: ${this.driverName}`);
    console.log(`Distance: ${this.distance} km`);
  }
}
class Car extends Vehicle {
  constructor(vehicleNo, driverName, distance) {
    super(vehicleNo, driverName, distance);
  }
  calculateFare() {
    const rate = 15;
    const fare = this.distance * rate;
    console.log(`Car fare @ ₹${rate}/km for ${this.distance} km = ₹${fare}`);
    return fare;
  }
}
class Bike extends Vehicle {
  constructor(vehicleNo, driverName, distance) {
    super(vehicleNo, driverName, distance); 
  }
  calculateFare() {
    const rate = 8;
    const fare = this.distance * rate;
    console.log(`Bike fare @ ₹${rate}/km for ${this.distance} km = ₹${fare}`);
    return fare;
  }
}
Vehicle.displayPlatformName(); 
const car1 = new Car("CAR-101", "Ramesh Kumar", 20);
const bike1 = new Bike("BIKE-202", "Suresh Yadav", 12);
const car2 = new Car("CAR-303", "Anita Sharma", 35);
const bike2 = new Bike("BIKE-404", "Priya Singh", 8);
console.log("\n--- Car 1 Booking ---");
car1.displayDetails();
car1.calculateFare();
console.log("\n--- Bike 1 Booking ---");
bike1.displayDetails();
bike1.calculateFare();
console.log("\n--- Car 2 Booking ---");
car2.displayDetails();
car2.calculateFare();
console.log("\n--- Bike 2 Booking ---");
bike2.displayDetails();
bike2.calculateFare();
console.log("\n--- Runtime Behavior Demo (Polymorphism) ---");
const rides = [car1, bike1, car2, bike2];
rides.forEach(ride => ride.calculateFare());