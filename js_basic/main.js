// Задача №2. Подсчет букв

function countChar (str, symbol) {

  var count = 0;

  // Change of register
  var str2 = str.toUpperCase();
  var symbol2 = symbol.toUpperCase();

  // Search position of coincidences
  var position = str2.indexOf (symbol2);
  while (position != -1) {
      count++;
      position = str2.indexOf (symbol2, position+1);
    }
  return count;
}

// Output
console.log(countChar('My Random String', 'm'));


// Задача №4. Наоборот

function reverseArrayInPlace (array) {

   for (var i = array.length-1; i >= 0 ; i--) {
    console.log(array[i] + " ");
   }
}

var array = ['A', 'B', 'C', 'D'];
reverseArrayInPlace(array);

function reverseArray(array) {
   for (var i = array.length; i > 0 ; i--) {
    console.log(i + " ");
   }
}

reverseArray([1, 2, 3, 4]);


// Задача №5. Свёртка

function mergeArrays (...arrays) {

  var res = [];
  [].concat(...arrays).forEach(function(i) {
    if (res.indexOf(i) == -1) {
      res.push(i);
    }
  });

  console.log(res);
}

mergeArrays([1, 2], [3, 4], [5, 6]);
mergeArrays([1, 2], [2, 4], [4, 6]);


// Задача №6. Every и some

function every(array, callback) {

  for(var i = 0; i < array.length; i++){
  	if(!callback(array[i])) {
  		return false;
  	}
  }
  return true;
}

function some(array, callback) {

  for(var i = 0; i < array.length; i++){
  	if(callback(array[i])) {
  		return true;
  	}
  }
  return false;
}

console.log(every([1, 4, NaN, 6], Number.isNaN));
console.log(every([NaN,NaN], Number.isNaN));
console.log(some([1, 2, 6], Number.isNaN));
console.log(some([1, 4 ,NaN, 6], Number.isNaN));


// Задача №11. День и месяц

function getNames (date) {
  var options = {
    month: 'long',
    weekday: 'long'
  };
  console.log( date.toLocaleString('en-US', {weekday: 'long'}) + ', ' +  date.toLocaleString('en-US', {month: 'long'}) );
}

getNames(new Date (2018, 0, 17)); // Wednesday, January


// Задача №12. Разница в годах 

function differenceInYears (somedate, today) {

  var x = 1000 * 3600 * 24 * 365;

  var diff = Math.abs(somedate.getTime() - today.getTime());
  var diffYears = +(diff / x).toFixed(2);
  console.log(diffYears);
}

differenceInYears(new Date(2014, 10, 2), new Date(2016, 10, 2));
differenceInYears(new Date(2014, 0), new Date(2014, 6));
