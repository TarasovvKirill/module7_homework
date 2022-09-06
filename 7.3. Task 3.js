/*
7.3. Задание 3.

Написать функцию, которая создает пустой объект, но без прототипа.
*/

function createObj () {
  return Object.create(null);
}

console.log(createObj()); 
