/*
7.3. Задание 2.

Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.
*/

function searchOfProperty(str, obj) {
  if (str in obj) {
    return true;
  }
  return false;
}

const dog = {
  name: "Rex",
  age: 5,
  color: "black"
};

let result = searchOfProperty("age", dog);
let result1 = searchOfProperty("age1", dog);
console.log(result, result1);
