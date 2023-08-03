// Задание 2   
document.addEventListener("DOMContentLoaded", function () {
    //шаг 1
    const cities = ['Москва', 'Санкт-Петербург', 'Нью-Йорк', 'Токио'];
    let temperatures = [];
    for (city of cities) {
        let value = prompt(`Введите температуру для города ${city}`, 0);
        temperatures.push(value);
    }
    console.log(temperatures);
    //шаг 2
    const tittle = document.querySelector('#tittle');
    let ind = cities.length;
    for (let pos = 0; pos < ind; pos++) {
        let p = document.createElement('p');
        p.textContent = `Температура в ${cities[pos]}: ${temperatures[pos]}°C`;
        tittle.appendChild(p);
    }

    //шаг 3
    const maximum = document.querySelector('#maximum');
    maximum.textContent = `Максимальная температура: ${temperatures.sort((a, b) => Number(b) - Number(a))[0]}°C`;

    //шаг 4
    const minimum = document.querySelector('#minimum');
    minimum.textContent = `Минимальная температура: ${temperatures.sort((a, b) => Number(a) - Number(b))[0]}°C`;
});


// *** Задание под звездочкой

let numbers = [];
for (let num = -10; num <= 10; num++) {
    numbers.push(num);
}

numbers.filter(elem => elem > 0);

let pos = 0;
do {
    numbers[pos] = numbers[pos] ** 2;
    pos++;
} while (pos < numbers.length);

numbers.sort((a, b) => Number(b) - Number(a));

console.log(numbers);