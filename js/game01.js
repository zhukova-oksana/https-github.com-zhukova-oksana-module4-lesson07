'use strict';

const guessNumber = function () {
  const randomNumber = Math.round(Math.random() * 100);
  console.log(randomNumber);
  let guess = +prompt('Какое число от 1 до 100 я загадал?');


    while (true) {

      switch (true) {
        case !(Number.isInteger(guess)):
          guess = +prompt('Введи число!');
          break;

        case (String(guess) === '0'):
          return alert('Конец!');

        case guess > randomNumber:
          guess = +prompt('Меньше!');
          break;

        case guess < randomNumber:
          guess = +prompt('Больше!');
          break;

        case (guess === randomNumber):
          alert('Правильно!');
          break;

      }
    }



}

guessNumber();
