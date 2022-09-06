/*
7.5. Задание 5

Переписать консольное приложение из предыдущего юнита на классы.
*/

class ElectricalAppliance {
  constructor(name, power) {
    this.name = name;
    this.power = power;
  }
  turnOn() {
    console.log(`${this.name} is ON`);
    this.onOrOff = true;
  };
  turnOff() {
    console.log(`${this.name} is Off`);
    this.onOrOff = false;
  };
  getPower() {
    return this.onOrOff ? this.power : 0;
  };
} 

class Light extends ElectricalAppliance {
  constructor (name, power, illumination) {
    super(name, power);
    this.illumination = illumination;
  }
  getInfo() {
  console.log(`${this.name}: power = ${this.power} W, illumination = ${this.illumination} Lx`);
  }  
}

class Power extends ElectricalAppliance {
  constructor (name, power, weight) {
    super(name, power);
    this.weight = weight;
  }
  getInfo() {
  console.log(`${this.name}: power = ${this.power} W, weight = ${this.weight} g`);
  }  
}

const lampInRoom = new Light("LampInRoom", 50, 100);
const lampInKitchen = new Light("LampInKitchen", 100, 150);

const kettle = new Power("Kettle", 300, 2000);
const iron = new Power("Iron", 400, 4000);

//lampInRoom.getInfo();
//lampInKitchen.getInfo();
//kettle.getInfo();
//iron.getInfo();

function power() {
  console.log(`Total power = ${lampInRoom.getPower() + lampInKitchen.getPower() + kettle.getPower() + iron.getPower()} W`);
}

power();

lampInRoom.turnOn();
lampInKitchen.turnOn();
kettle.turnOn();
iron.turnOn();
power();

lampInKitchen.turnOff();
iron.turnOff();
power();



