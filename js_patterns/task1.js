"use strict";

// Декоратор
function Ball() {}

Ball.prototype.getDescription = function() {
  return 'ball';
}

function SomeBallDecorator(ball) {
  this.ball = ball;
}

SomeBallDecorator.prototype.getDescription = function() {
  return 'red ' + this.ball.getDescription();
}

function LineBallDecorator(ball) {
  this.ball = ball;
}

LineBallDecorator.prototype.getDescription = function() {
  return this.ball.getDescription() + ' with lines';
}

console.log(new Ball().getDescription()) // ball
console.log(new SomeBallDecorator(new Ball()).getDescription()) // red ball
console.log(new LineBallDecorator(new Ball()).getDescription()) // ball with lines
console.log(new LineBallDecorator(new SomeBallDecorator(new Ball())).getDescription()) // red ball with lines
