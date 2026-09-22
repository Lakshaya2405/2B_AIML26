class Person {
  static totalPersons = 0;
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
    Person.totalPersons++;
  }
  displayDetails() {
    console.log(`ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
  }
  static displayTotalPersons() {
    console.log(`\nTotal Persons in the System: ${Person.totalPersons}`);
  }
}
class Doctor extends Person {
  constructor(id, name, age, specialization, consultationFee) {
    super(id, name, age); // constructor chaining
    this.specialization = specialization;
    this.consultationFee = consultationFee;
  }
  displayDetails() {
    super.displayDetails();
    console.log(`Specialization: ${this.specialization}`);
    console.log(`Consultation Fee: ₹${this.consultationFee}`);
  }
}
class Patient extends Person {
  constructor(id, name, age, disease, roomNo) {
    super(id, name, age);
    this.disease = disease;
    this.roomNo = roomNo;
  }
  displayDetails() {
    super.displayDetails();
    console.log(`Disease: ${this.disease}`);
    console.log(`Room No: ${this.roomNo}`);
  }
}
const doctor1 = new Doctor(1, "Dr. Anil Mehta", 45, "Cardiology", 800);
const doctor2 = new Doctor(2, "Dr. Kavita Rao", 38, "Dermatology", 600);
const patient1 = new Patient(3, "Rohan Verma", 29, "Fever", "101");
const patient2 = new Patient(4, "Sneha Iyer", 34, "Fracture", "205");
console.log("--- Doctor 1 Details ---");
doctor1.displayDetails();
console.log("\n--- Doctor 2 Details ---");
doctor2.displayDetails();
console.log("\n--- Patient 1 Details ---");
patient1.displayDetails();
console.log("\n--- Patient 2 Details ---");
patient2.displayDetails();
Person.displayTotalPersons();