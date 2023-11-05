//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
let currentDate = new Date ();
console.log (currentDate);

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
let currentYear = currentDate.getFullYear();
console.log(currentYear);

//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
let currentMonth = currentDate.getMonth();
console.log(currentMonth);

//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
let currentDay = currentDate.getDate();
console.log(currentDay);

//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
let birthday = new Date(1980, 11,15);
console.log(birthday);

//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
const futureDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate() + 10);
console.log("Будущая дата: " + futureDate.toLocaleString('ru'));

//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
console.log("Разница в днях: " + Math.round((futureDate - currentDate)/(1000 * 60 * 60 * 24))); //// Преобразование миллисекунд в дни

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
const pastDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 5);
console.log("Прошедшая дата: " + pastDate.toLocaleString('ru'));

//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
console.log('Разница ' + Math.round((currentDate - pastDate)/(1000 * 60 * 60 * 24)) + ' дней')

//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
const nextWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 7)
console.log("Дата следующей недели: " + nextWeek.toLocaleString('ru'));

//Задание 11
// Выведите в консоль день недели для nextWeek
console.log('День недели:' + nextWeek.getDay());

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
const futureYear = currentDate.getFullYear() + 5;
console.log(futureYear);

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
const futureDateInFutureYear = new Date(futureYear, 11, 15);
console.log("Дата рождения в будущем году: " + futureDateInFutureYear.toLocaleString('ru'));

//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
console.log("Разница в годах: " + (futureYear - currentDate.getFullYear()));

//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = new Date(Date.parse('2023-06-15T08:30:00.000Z'));
console.log(strDate);

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
const timestamp = Date.parse(strDate);
console.log("Таймстамп: " + timestamp);

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const date = new Date(Date.parse('2023/06/15'));

const wrongDate = () =>{
    if (date == NaN){
        console.log('Неправильный формат даты');
    } else {
        console.log('Правильный формат даты');
    }
}
wrongDate();


//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;

if (number > 0) {
    console.log("Число положительное.");
  } else if (number === 0) {
    console.log("Число равно нулю.");
  } else {
    console.log("Число отрицательное.");
  }

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
if (number % 2 === 0) {
    console.log("Число является четным.");
  } else {
    console.log("Число не является четным.");
  }

//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
if (number % 3 === 0) {
    console.log("Число является кратным 3.");
  } else {
    console.log("Число не является кратным 3.");
  }

//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
  if (number >= 0 && number <= 9) {
    console.log("Число является однозначным.");
  } else {
    console.log("Число не является однозначным.");
  }

//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
  if (number >= 10 && number <= 99) {
    console.log("Число является двузначным.");
  } else {
    console.log("Число не является двузначным.");
  }

//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
if (number > 0) {
    console.log("Число является положительным.");
  } else if (number == 0) {
    console.log("Число является нулём.");
  } else {
    console.log("Число является отрицательным.");
  }

//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
if (number % 5 == 0) {
    console.log("Число является кратным 5.");
  } else if (number % 7 == 0) {
    console.log("Число является кратным 7.");
  } else {
    console.log("Число не является кратным 5 или 7.");
  }

//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
if (number <= 0) {
    console.log("Число является отрицательным или нулём.");
  } else {
    console.log("Число является положительным.");
  }

//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if (number >=100 && number <= 999) {
    console.log("Число является трёхзначным положительным.");
  } else {
    console.log("Число не является трёхзначным положительным.");
  }

//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).

const dayNumber = 3; // Замените это значение на нужное число

switch (dayNumber) {
  case 1:
    console.log("Понедельник");
    break;
  case 2:
    console.log("Вторник");
    break;
  case 3:
    console.log("Среда");
    break;
  case 4:
    console.log("Четверг");
    break;
  case 5:
    console.log("Пятница");
    break;
  case 6:
    console.log("Суббота");
    break;
  case 7:
    console.log("Воскресенье");
    break;
  default:
    console.log("Введенное число не соответствует ни одному дню недели.");
}

//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = 'W';
let fullName = () => {switch (direction) {
    case 'N':
    console.log("Север");
    break;
  case 'S':
    console.log("Юг");
    break;
  case 'E':
    console.log("Восток");
    break;
  case 'W':
    console.log("Запад");
    break;
  default:
    console.log("Неправильный символ направления.");
}
}
fullName();

