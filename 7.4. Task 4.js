/*
7.4. Задание 4.

Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент). 
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.
*/

function ElectricalAppliance(name, power) {
  this.name = name;
  this.power = power;
}

ElectricalAppliance.prototype.turnOn = function () {
    console.log(`${this.name} is ON`);
    this.onOrOff = true;
};

ElectricalAppliance.prototype.turnOff = function () {
    console.log(`${this.name} is Off`);
    this.onOrOff = false;
};

ElectricalAppliance.prototype.getPower = function () {
  return this.onOrOff ? this.power : 0;
};

function Light(name, power, illumination) {
  this.name = name;
  this.power = power;
  this.illumination = illumination;
}

function Power(name, power, weight) {
  this.name = name;
  this.power = power;
  this.weight = weight;
}

Light.prototype = new ElectricalAppliance();
Power.prototype = new ElectricalAppliance();

Light.prototype.getInfo = function () {
  console.log(`${this.name}: power = ${this.power} W, illumination = ${this.illumination} Lx`);
};

Power.prototype.getInfo = function () {
  console.log(`${this.name}: power = ${this.power} W, weight = ${this.weight} g`);
};

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

