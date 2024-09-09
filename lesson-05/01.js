/*
Реализовать метод `addResource`, который будет добавлять указанное количество ресурсов к уже существующим ресурсам в объекте `game`.

Требования к методу:

1. Метод должен принимать два параметра:
  - `resource` (строка) — тип ресурса (`gold`, `lumber` и т.д.).
  - `amount` (число) — количество ресурса, которое нужно добавить.
2. Если тип ресурса не существует в объекте `game.resources`, метод должен выводить в консоль сообщение "Invalid resource".
3. Если ресурс существует, метод должен добавлять значение `amount` к текущему количеству этого ресурса в объекте.
*/

const game = {
  resources: {
    gold: 250,
    lumber: 100,
  },
  addResource(resource, amount) {
    if (this.resources.hasOwnProperty(resource)){
      this.resources[resource] += amount
  } else {
    console.log("Invalid resource");
  }
  },
}
game.addResource("gold", 50)
console.log(game.resources);



// const game = {
//   resources: {
//     gold: 250,
//     lumber: 100,
//   },
//   addResource(resource, amount) {
//     if ('resources' in resource){ // if (resource in this.resources)  -- можно было так решить
//       resources[resource] += amount // this.resources[resource] += amount;
//   } else {
//     console.log("Invalid resource");
//   }
//   },
// }
// game.addResource("gold", 50)
console.log(game.resources);


// Теперь о вашем вопросе, почему нельзя использовать цикл `for...in` в данном контексте. Циклы `for...in` обычно используются для перебора свойств объектов, но в этом случае наша функция `addResource` не предназначена для перебора, а для добавления определенного количества ресурсов.