// Задание 2

function analysis() {
    let parent = document.querySelector('#analysis');
    let p = document.createElement('p');

    // Шаг 1
    let grades = [];
    do {
        grades.push(Math.round(Math.random() * 100));
    } while (grades.length <= 11);
    console.log(grades);
    p.textContent = `Массив с оценками студентов: ${grades}`;
    parent.appendChild(p);

    // Шаг 2
    let averageOfGrades = Math.round((grades.reduce((acc, number) => acc + number, 0)) / grades.length);
    console.log(averageOfGrades);
    p = document.createElement('p');
    p.textContent = `Средний балл студентов: ${averageOfGrades}`;
    parent.appendChild(p);

    //Шаг 3
    let copyGrades = [...grades];
    let maxGrade = copyGrades.sort((a, b) => b - a)[0];
    console.log(maxGrade);
    p = document.createElement('p');
    p.textContent = `Максимальный балл среди студентов: ${maxGrade}`;
    parent.appendChild(p);

    //Шаг 4
    let minGrade = copyGrades.sort((a, b) => a - b)[0];
    console.log(minGrade);
    p = document.createElement('p');
    p.textContent = `Минимальный балл среди студентов: ${minGrade}`;
    parent.appendChild(p);

    //Шаг 5
    let topGrades = copyGrades.filter(num => num >= 60);
    console.log(topGrades);
    console.log(topGrades.length)
    p = document.createElement('p');
    p.textContent = `Количество студентов, получивших положительную оценку ( > = 60 ) : ${topGrades.length}`;
    parent.appendChild(p);

    //Шаг 6
    let badGrades = copyGrades.filter(num => num < 60);
    console.log(badGrades);
    console.log(badGrades.length)
    p = document.createElement('p');
    p.textContent = `Количество студентов, получивших отрицательную оценку ( < 60 ) : ${badGrades.length}`;
    parent.appendChild(p);

    //Шаг 7
    let strGrades = grades.map((item) => {
        return (item > 79 && item < 101) ? 'A' : (item > 59 && item < 80) ? 'B' : (item > 39 && item < 60) ? 'C' : (item > 19 && item < 40) ? 'D' : (item < 20) ? 'E' : null;
    });
    console.log(strGrades)
    p = document.createElement('p');
    p.textContent = `Массив с буквенными оценками студентов : ${strGrades}`;
    parent.appendChild(p);
}


// Задание со звёздочкой
document.addEventListener("DOMContentLoaded", function () {
    let array = [
        {
            name: 'Стивен Спилберг',
            career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
            films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
            top_rated_film: 'Список Шиндлера'
        },
        {
            name: 'Кристофер Нолан',
            career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
            films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
            top_rated_film: 'Начало'
        },
        {
            name: 'Виктор Шамиров',
            career: 'Режиссер, Сценарист, Актер, Продюсер, Монтажер',
            films: 'https://www.film.ru/person/viktor-shamirov',
            top_rated_film: 'Со мною вот что происходит'
        },
        {
            name: 'Мартин МакДонах',
            career: 'Сценарист, Режиссёр, Продюсер',
            films: 'https://www.film.ru/person/martin-makdonah',
            top_rated_film: 'Три билборда на границе Эббинга, Миссури'
        },
        {
            name: 'Алексей Балабанов',
            career: 'Режиссёр, Сценарист, Актёр, Продюсер',
            films: 'https://www.film.ru/person/aleksey-balabanov',
            top_rated_film: 'Брат'
        },
        {
            name: 'Питер Фаррелли',
            career: 'Продюсер, Режиссёр, Сценарист, Актёр',
            films: 'https://www.film.ru/person/piter-farrelli',
            top_rated_film: 'Зелёная книга'
        },
        {
            name: 'Юрий Быков',
            career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
            films: 'https://www.film.ru/person/yuriy-bykov',
            top_rated_film: 'Дурак'
        },
        {
            name: 'Жан-Марк Валле',
            career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
            films: 'https://www.film.ru/person/zhan-mark-valle',
            top_rated_film: 'Далласский клуб покупателей'
        },
    ];

    let obj = {};
    let index = 0;
    let images = document.querySelectorAll("img");
    let producers = document.querySelectorAll(".card-title");
    let professions = document.querySelectorAll(".card-text");
    let movies = document.querySelectorAll(".btn");
    let topFilmsList = [];
    do {
        obj = array[index];
        images[index].src = `assets/${index}.jpg`;
        images[index].classList.add("img");
        producers[index].textContent = Object.values(obj)[0];
        professions[index].textContent = Object.values(obj)[1];
        topFilmsList.push(Object.values(obj)[3]);
        movies[index].href = Object.values(obj)[2];
        index += 1;
    } while (index <= 7);

    document.getElementsByClassName("lead")[0].textContent = topFilmsList;
});
