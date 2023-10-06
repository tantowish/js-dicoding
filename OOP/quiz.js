class Animal{
    constructor(name, age, isMammal){
        this.name = name
        this.age = age
        this.isMammal = isMammal
    }
}

class Rabbit extends Animal{
    constructor(name, age, isMammal){
        super(name,age,isMammal)
        this.isMammal = true
    }
    eat(){
        return  `${this.name} sedang makan!`
    }
}

class Eagle extends Animal{
    constructor(name, age, isMammal){
        super(name,age,isMammal)
        this.isMammal = false
    }
    fly(){
        return  `${this.name} sedang terbang!`
    }
}

let myRabbit = new Rabbit('Labi',2)
let myEagle = new Eagle('Elo', 4)

console.log(myRabbit)
console.log(myEagle)

class Car { }
// const car = new Car();

const car = {
    brand: 'Ford',
    color: 'red',
    maxSpeed: 200,
    chassisNumber: 'f-1',
    drive: () => {
      console.log('driving');
    },
    reverse: () => {
        console.log('reversing');
    },
    turn: () => {
        console.log('turning');
    }
}
console.log(typeof Animal);