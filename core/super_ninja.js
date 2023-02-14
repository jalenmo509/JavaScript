// Build Ninja Class with attributes name, health >>> add speed and strength properties with default value of 3

class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;

    }

    //Build Ninja Methods

    sayName() {
        console.log(`Name: ${this.name}`);
    }

    showStats() {
        console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);
    }

    drinkSake() {
        console.log(`${this.name} drank sake and recovered 10 hp!`)
        this.health += 10;
    }
}

//Build Sensei Class that inherits Ninja Class properties

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name, health, speed, strength, wisdom)
        this.wisdom = wisdom;
    }
    //Build Sensei Methods
    speakWisdom() {
        super.drinkSake();
    }
}

// ninja1 is a new instance of object with name Sasuke Uchiha and health of 100

// const ninja1 = new Ninja("Sasuke Uchiha", 100)

/* Testing Ninja Class and Methods with Console

console.log(ninja1);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
ninja1.drinkSake();

*/

// //sensei1 is new instance of sensei object with name Sasuke
const sensei1 = new Sensei("Orochimaru");

// // Testing Sensei Class and Methods with Console
console.log(sensei1);
sensei1.speakWisdom();
sensei1.showStats();