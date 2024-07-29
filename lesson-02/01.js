/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)


// const isAdmin = false
// const isVerifiedUser = false
// const hasSpecialPermission = false
// const hasTemporaryPass = false

// let isAccess = false

// // your code

// while (!isAccess) {
//   userChoice = prompt("Выберите камень, ножницы или бумагу")
//   userChoice = userChoice.toLowerCase();
//   if () {
//     let isAccess =
//     (isAdmin === true &&  (isVerifiedUser === true || hasTemporaryPass === true)) ||
//     (isVerifiedUser === true && (isVerifiedUser === true || hasTemporaryPass === true))
//     alert("Доступ разрешен")
//     isAccess === true
//   } else {
//     alert("Доступ запрещен!")
//     isWinner === true
//   } 
// }