// Задание №3. Замыкания

function makeCounter() {
  var count = 1;
  return {
    next: function() { return count++;},
    prev: function() {return count--;}
  };
}

var x = makeCounter();

console.log (x.next()); // 1
console.log (x.next()); // 2
console.log (x.next()); // 3
console.log (x.prev()); // 4
console.log (x.prev()); // 3
console.log (x.prev()); // 2
