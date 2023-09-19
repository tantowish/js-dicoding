function Car(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }

  Car.prototype.drive = function() {
    console.log(`${this.brand} ${this.color} is driving`);
  }
   
  Car.prototype.reverse = function() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }
  Car.prototype.turn = function() {
    console.log(`${this.brand} ${this.color} is turning`);
  }

  // Membuat objek mobil dengan constructor function Car
const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
const car2 = new Car('Honda', 'Black', 180, 'ho-1');
const car3 = new Car('Suzuki', 'Red', 220, 'su-1');

console.log(car1);
console.log(car2);
console.log(car3);

car1.drive();
car2.reverse();
car3.turn();

// ES6 syntax
class Car2 {
    constructor(brand, color, maxSpeed, chassisNumber) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.chassisNumber = chassisNumber;
    }

    drive() {
        console.log(`${this.brand} ${this.color} is driving`);
    }

    reverse() {
        console.log(`${this.brand} ${this.color} is reversing`);
    }
    turn() {
        console.log(`${this.brand} ${this.color} is turning`);
        }
}

// Membuat objek mobil dengan constructor function Car
const car21 = new Car2('Toyota', 'Silver', 200, 'to-1');
const car22 = new Car2('Honda', 'Black', 180, 'ho-1');
const car23 = new Car2('Suzuki', 'Red', 220, 'su-1');
 
console.log(car21);
console.log(car22);
console.log(car23);
 
car21.drive();
car22.reverse();
car23.turn();


console.log("The type of Car class is :",typeof Car);
console.log("The type of Car class is :",typeof Car2);
