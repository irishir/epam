// Задание №3. Замыкания

function makeCounter() {
  var count = 1;
  return {
    inc: function() { return count++;},
    dec: function() {return count--;}
  };
}

var x = makeCounter();

console.log (x.inc()); // 1
console.log (x.inc()); // 2
console.log (x.inc()); // 3
console.log (x.dec()); // 4
console.log (x.dec()); // 3
console.log (x.dec()); // 2
