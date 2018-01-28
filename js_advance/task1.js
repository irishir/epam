// Задача №1. Промисификация

function compare(value1, value2) {
  if (value1 < value2) {
    return -1;
  } else if (value1 > value2) {
     return 1;
  } else {
    return 0;
  }
}

function func(v1, v2) {
	return new Promise(function(resolve, reject) {
		if(!v1 || !v2 || typeof v1 != 'number' || typeof v2 != 'number') {
			setTimeout(() => reject('Error'), 1000);
		}
		setTimeout(() => resolve(compare(v1, v2)), 1000);
	});
}

func(6,7)
	.then((result) => console.log(result))
	.catch((error) => console.log(error));
