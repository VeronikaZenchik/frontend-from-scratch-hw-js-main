// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(number) {
  let x;
    if (number % 2 == 0) {
    x = true;
  } else {
    x = false;
  }
  return x;
}
console.log(isEven(11));

//x = True; x = False;
// True и False воспринимаются как имена переменных. Тебе нужно работать со значениями true, false.

// let x = Boolean();
// В js нужно оперировать значениями а не классами. Т.е смысла в этой строчке нет. Достаточно объявить переменную и в условии присвоить ей или true или false.

// isEven(10); alert(x);
// Переменные, объявленные в функциях, не доступны за их пределами. Ты хочешь работать не с переменной из функции, а с результатом вызова функции вот так: alert(isEven(10));