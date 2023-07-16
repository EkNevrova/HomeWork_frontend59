//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
const currentDate = new Date();
console.log(`Текущая дата: ${currentDate}`);

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
const currentYear = currentDate.getFullYear();
console.log(`Текущий год: ${currentYear}`);

//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
const currentMonth = currentDate.getMonth();
console.log(`Номер текущего месяца: ${currentMonth + 1}`);

//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
const currentDay = currentDate.getDate();
console.log(`Текущий день месяца: ${currentDay}`);


//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
const birthday = new Date(2023, 1, 14, 16, 00);
console.log(`Мой день рождения был: ${birthday}`);

//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
const futureDate = new Date(currentYear, currentMonth + 1, currentDay + 10);
console.log(`Через 1 месяц и 10 дней будет: ${futureDate}`);

//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
console.log(`Количество дней составит: ${Math.floor((futureDate - currentDate) / 60000 / 60 / 24)}`);

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
const pastDate = new Date(currentYear, currentMonth, currentDay - 5);
console.log(`5 дней назад было: ${pastDate}`);

//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
console.log(`Количество дней составило: ${Math.floor((currentDate - pastDate) / 60000 / 60 / 24)}`);

//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
const nextWeek = new Date(currentYear, currentMonth, currentDay + 7);
console.log(`Через неделю будет: ${nextWeek}`);

//Задание 11
// Выведите в консоль день недели для nextWeek
console.log(`Будет день недели: ${nextWeek.getDay()}`);

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
const futureYear = currentYear + 5;
console.log(`Через 5 лет будет: ${futureYear} год`);

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
const futureDateInFutureYear = new Date(futureYear, 1, 14, 16, 00);
console.log(`Через 5 лет мой день рождения будет: ${futureDateInFutureYear}`);

//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
console.log(`Разница составила: ${futureYear - currentYear} лет`);

//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = '2023-06-15T08:30:00.000Z';
const newDate = new Date(strDate);
console.log(`Новая дата: ${newDate}`);

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
const parsDate = Date.parse(strDate);
console.log(`таймстамп = ${parsDate}`);

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const date = '2023/06/15';
const wrongDate = Date.parse(date);
if (wrongDate == NaN) {
    console.log('Неправильный формат даты');
}
else {
    console.log('Правильный формат даты');
}

//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;
if (number > 0) {
    console.log(`Число ${number} положительное`);
}
else {
    console.log(`Число ${number} отрицательное`);
}

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
if ((number % 2) === 0) {
    console.log(`Число ${number} чётное`);
}
else {
    console.log(`Число ${number} нечётное`);
}

//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
if ((number % 3) === 0) {
    console.log(`Число ${number} кратное 3`);
}
else {
    console.log(`Число ${number} некратное 3`);
}

//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
if (String(number).length === 1) {
    console.log(`Число ${number} однозначное`);
}
else {
    console.log(`Число ${number} неоднозначное`);
}

//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
if (String(number).length === 2) {
    console.log(`Число ${number} двузначное`);
}
else {
    console.log(`Число ${number} недвузначное`);
}

//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
if (number > 0 || number === 0) {
    console.log(`Число ${number} положительное или равно 0`);
}
else {
    console.log(`Число ${number} отрицательное`);
}

//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
if ((number % 5) === 0) {
    console.log(`Число ${number} кратное 5`);
}
else if ((number % 7) === 0) {
    console.log(`Число ${number} кратное 7`);
}
else {
    console.log(`Число ${number} некратное 5 и 7`);
}

//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
if (number < 0) {
    console.log(`Число ${number} отрицательное`);
}
else if (number === 0) {
    console.log(`Число ${number} равно 0`);
}
else {
    console.log(`Число ${number} неотрицательное и не равно 0`);
}

//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if (String(number).length === 3 && number > 0) {
    console.log(`Число ${number} трёхзначное положительное`);
}
else {
    console.log(`Число ${number} нетрёхзначное или отрицательное`);
}

//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
let day = 2;
switch (day) {
    case 1: console.log('Понедельник');
        break;
    case 2: console.log('Вторник');
        break;
    case 3: console.log('Среда');
        break;
    case 4: console.log('Четверг');
        break;
    case 5: console.log('Пятница');
        break;
    case 6: console.log('Суббота');
        break;
    case 7: console.log('Воскресенье');
        break;
    default: console.log('Неизвестный день недели');
        break;
}


//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = 'W';
let fullName;

switch (direction) {
    case 'N': fullName = 'Север';
        break;
    case 'S': fullName = 'Юг';
        break;
    case 'W': fullName = 'Запад';
        break;
    case 'E': fullName = 'Восток';
        break;
    default: fullName = 'Неопределено';
        break;
}
console.log(`${direction} - ${fullName}`);