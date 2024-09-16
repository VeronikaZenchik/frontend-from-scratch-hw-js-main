/*
Попробуйте написать свою версию метода `map`. Ваша задача — создать функцию `map`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна иметь возможность принимать следующие параметры:

- `element` (текущий элемент массива),
- `index` (индекс текущего элемента),

Ваша функция `map` должна возвращать новый массив, где каждый элемент является результатом вызова функции `callback` на каждом элементе исходного массива.
*/

/*
Пример использования вашей функции:

const numbers = [1, 2, 3, 4, 5]

const doubledNumbers = map(numbers, (element, index) => {
  return element * 2
})

console.log(doubledNumbers) // Должен вывести: [2, 4, 6, 8, 10]
*/

const map = (array, callback) => {
  let result = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (callback(element, index)) {
      result.push(element);
  }
  }
  return result
}



const numbers = [1, 2, 3, 4, 5];
const doubledNumbers =  numbers.map((element, index) => {
  return element * 2;
});
console.log(doubledNumbers); 

const letters = ['a', 'b', 'c', 'd'];
const indexLetters = letters.map((element, index) => {
  return element + index;
});
console.log(indexLetters);