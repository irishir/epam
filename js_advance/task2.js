// Задание №2. Цепочка промисов (b)

function random() {
    return new Promise(function(resolve) {
      var timeout = Math.random()*3000;
      setTimeout(function(){
        resolve(Math.random()*3);
    }, timeout)
  })
}

var a = new Array();

Promise.all(a).then(values => {
  console.log(values);
});
