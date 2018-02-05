// Задание №1. Создание цепочки прототипов

function Vehical(speed) {
    this.speed = 90;
}

function Bike(wheelsCount){
  Vehical.apply(this);
  this.wheelsCount = 2;
}
Bike.prototype = Object.create(Vehical.prototype);


function Car (wheelsCount, doorsCount) {
  Vehical.apply(this);
  this.wheelsCount = 4;
  this.doorsCount = 5;
}
Car.prototype = Object.create(Vehical.prototype);

function MonsterTruck (wheelsSize) {
  Car.apply(this);
  this.wheelsSize = wheelsSize || "66 inches";
}
MonsterTruck.prototype = Object.create(Car.prototype);

var bike = new Bike(),
    car = new Car(),
    monster = new MonsterTruck();

console.log(bike.speed);
console.log(car.speed);
console.log(monster.speed);
console.log(monster.wheelsCount);
console.log(monster.wheelsSize);
