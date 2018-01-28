// Задание №2. Цепочка промисов

function random(sumWith) {
    return new Promise(function(resolve) {
      var timeout = Math.random()*3000;
      setTimeout(function(){resolve(Math.random()*3+ sumWIth);}, timeout)
  })
}

promise
  .then(random(result) {
    console.log(sumWIth)
    return result;
  })
  .then(function(result) {
    console.log('wrapName')
    return wrapName(result)
  })
  .then(function(result) {
    console.log('finish')
    alert(result)
  })
  .catch(function(error) {
    console.log('error')
    alert('Фиаско!')
  })
