// section p1fromVideo
function sayHi(userName) {
    userName = prompt('Как тебя зовут?', 'Nobody');
    alert(`Привет, ${userName}!`)
}

// section p2fromVideo

function action(operation) {
    let a = prompt(`Введите число 1`);
    let b = prompt(`Введите число 2`);
    if (operation === '+') {
        alert(`Результат ${Number(a) + Number(b)}`);
    }
    else if (operation === '-') {
        alert(`Результат ${a - b}`);
    }
    else if (operation === '*') {
        alert(`Результат ${a * b}`);
    }
    else {
        alert(`Результат ${a / b}`);
    }

}

// section p2fromText
function imstudy() {
    console.log(`Я учу JavaScript!`);
}
imstudy();

// section p3fromText


function changePhoto(operation) {
    let image = document.getElementById("image");
    if (operation === '+') {
        image.src = 'assets/images/hi_shiba.jpg';
    }
    else {
        image.src = 'assets/images/Noberu.jpg';
    }
}

// section ***fromText      => !НЕ ДОДЕЛАНО! 
function calculateTotalPrice() {
    let quantity = document.getElementById("quantity").value;
    let price = document.getElementById("price").value;
    let result = quantity * price;
    alert(`Стоимость покупки: ${result.toLocaleString('ru-RU')} рублей`);
}