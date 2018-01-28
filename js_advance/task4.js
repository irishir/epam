// Задача №4. Контекст вызова и карринг

function sumWith(number) {
  return this.currentValue += number;
}
var number = 2;
alert(sumWith.bind({currentValue: 3}) (number));
