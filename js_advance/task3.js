<<<<<<< HEAD
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
=======
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
>>>>>>> 4065da17dc055ffd55c4f835ba4e4a754b888a2f
