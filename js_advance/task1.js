// Задача №1. Промисификация

// function compare(value1, value2) {

//   if (value1 < value2) {
//     return -1;
//   } else if (value1 > value2) {
//      return 1;
//   } else {
//     return 0;
//   }
// }

// setTimeout(compare, 1000, 8, 9);

function compare(value1, value2) {

//   if (value1 < value2) {
//     return -1;
//   }
//   if (value1 > value2) {
//     return 1;
//   }
//   if (value1 === value2) {
//     return 0;
//   }

  if (value1 < value2) {
    return -1;
  } else if (value1 > value2) {
     return 1;
  } else {
    return 0;
  }
}

// setTimeout(compare, 1000, 8, 9);


function func() {
  return new Promise(function(resolve, reject) {
    if (!value1 || !value2 || typeof value1 != 'number' || typeof value2 != 'number') {
     setTimeout(() => reject("Error!"), 2000);
    }
    setTimeout (() => resolve(compare(value1, value2)), 1000);
    });
 }


func(3, 4)
    .then((result) => console.log (result))
    .catch((error) => console.log (error));
