class Car {
    constructor(brand, color, maxSpeed, chassisNumber) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;    }

      get chassisNumber() {
        return this._chassisNumber;
      }

      set chassisNumber(chassisNumber) {
        console.log('you are not allowed to change the chassis number');
      }
}
   
class Mail {
    constructor(sender, receiver, subject, body) {
        this.sender = sender;
        this.receiver = receiver;
        this.subject = subject;
        this.body = body;
    }
}

const car1 = new Car('BMW', 'red', 200, 'b-1');
const car2 = new Car('Audi', 'blue', 220, 'a-1');
const car3 = new Car('BMW', 'black', 250, 'b-2');

console.log(car1);
console.log(car2);
console.log(car3);

const car = new Car('BMW', 'red', 200);
car.chassisNumber = 'BMW-1';
 
console.log(car);



class User {
    constructor(firstName, lastName) {
     this.firstName = firstName;
     this.lastName = lastName;
   }
   
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
   
    set fullName(fullName) {
      const [firstName, lastName] = fullName.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
   
  const user = new User('John', 'Doe');
  console.log(user);
  console.log(user.fullName);
   
  user.fullName = 'Fulan Fulanah';
  console.log(user);
  console.log(user.fullName);
 