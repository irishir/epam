"use strict";

// Цепочка обязанностей

function Child(next) {
  this.next = next;
}

Child.prototype.eat = function(apples) {
    apples = apples-Math.round(Math.random() * 2 + 1);
    if (apples <= 0) {
      console.log("Neener-neener! I am glutton! And now are No apples: ", apples);
    } else if (this.next && apples > 0){
      this.next.eat(apples);
      console.log(apples)
    }
}

const boy1 = new Child();
const girl1= new Child(boy1);
// ...
girl1.eat(3);
