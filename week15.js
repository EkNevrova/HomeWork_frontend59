//Задание 1
// Выведите числа от 1 до 10 в консоль
console.log('Задание 1');
for (let num = 1; num <= 10; num++) {
    console.log(num);
}

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
console.log('Задание 2');
let num = 1;
while (num <= 20) {
    if (num % 2 == 0) {
        console.log(num);
    }
    num++;
}

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
console.log('Задание 3');
for (let num = 10; num !== 0; num--) {
    console.log(num);
}

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
console.log('Задание 4');
num = 1;
while (num <= 10) {
    console.log(num * 5);
    num++;
}

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
console.log('Задание 5');
sum = 0;
for (let ind = 1; ind <= 100; ind++) {
    sum += ind;
}
console.log(sum);

//Задание 6
// Выведите все элементы массива в консоль используя цикл for
console.log('Задание 6');
const array = [1, 2, 3, 4, 5];
for (let ind = 0; ind < array.length; ind++) {
    console.log(array[ind]);
}

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
console.log('Задание 7');
const numbers = [1, 2, 3, 4, 5];
sum = 0;
for (let ind = 0; ind < array.length; ind++) {
    sum += array[ind];
}
console.log(sum);

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
console.log('Задание 8');
let animals = ["Кот", "Рыба", "Лемур"];
for (let ind = 0; ind < animals.length; ind++) {
    animals[ind] = `${animals[ind]} - прекрасное животное`;
}
console.log(animals);

//Задание 9
// Выведите символы в строке в консоль
console.log('Задание 9');
const str = 'Hello';
for (let ind = 0; ind < str.length; ind++) {
    console.log(str[ind]);
}

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
console.log('Задание 10');
for (let elem of array) {
    console.log(elem);
}

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
console.log('Задание 11');
const sentences = ['Hello, world!', 'How are you?'];
for (let elem of sentences) {
    console.log(elem.split(' '));
}

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
console.log('Задание 12');
sum = 0;
for (let elem of numbers) {
    sum += elem;
}
console.log(sum);

//Задание 13
// Выведите длину каждого слова из массива строк в консоль
console.log('Задание 13');
const list = ['apple', 'banana', 'cherry'];
for (let elem of list) {
    console.log(elem.length);
}

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
console.log('Задание 14');
let word = 'words';
let newArray = [];
for (let ind = 0; ind < word.length; ind++) {
    newArray.push(word[ind].toUpperCase());
}
console.log(newArray);

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
console.log('Задание 15');
const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];
for (let elem of vowels) {
    if (greeting.includes(elem)) {
        vowelCount++;
    }
}
console.log(vowelCount);

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
console.log('Задание 16');
const words = ['Hello', 'world', '!'];
let newWord = words.join(' ');
console.log(newWord);

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
console.log('Задание 17');
num = 1;
while (num <= 10) {
    console.log(num);
    num++;
}

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
console.log('Задание 18');
num = 10;
while (num !== 0) {
    console.log(num);
    num--;
}

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
console.log('Задание 19');
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;
while (num < allNumbers.length) {
    if (allNumbers[num] >= 0) {
        console.log(`${allNumbers[num]} = ${allPositive}`);
    }
    num++;
}


//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
console.log('Задание 20');
const random = [2, 4, 6, -3, 8, 10];
num = 0;
do {
    console.log(random[num]);
    num++;
} while (random[num] >= 0 && num !== random.length)

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
console.log('Задание 21');
num = 0;
do {
    num++;
    if (num % 3 > 0) {
        console.log(num);
    }
} while (num < 101)

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
console.log('Задание 22');
sum = 0;
do {
    let value = + prompt('Введите число', ' ');
    if (!value) break;
    sum += value;
} while (sum < 101)
console.log(`Сумма: ${sum}`);

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
console.log('Задание 23');
function changeColor() {
    const elemH4 = document.querySelectorAll('h4');
    for (elem of elemH4) {
        elem.style.background = 'blue';
    }
}
console.log(changeColor());

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
console.log('Задание 24');
let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';
let pos = 0;
do {
    pos = Math.round(Math.random() * 100);
    if (pos <= alphabet.length) {
        randomString += alphabet[pos];
    }
} while (randomString.length < 6)
console.log(randomString);
