/*
7.3. Задание 1.

Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.
*/

function propOfObject (obj) {
   for (let key in obj) {
     if (obj.hasOwnProperty(key)) {
         console.log(`Ключ - ${key}, значение - ${obj[key]}`); 
     }   
   }
 }
 const person = {
  city: "Moscow"
 }
 
 const student = Object.create(person);
 student.ownCity = "Piter";
 console.log(student); 
 
 propOfObject(student);
 
