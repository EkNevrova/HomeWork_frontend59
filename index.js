// Задание 2
function calculateDays() {
    let inputDate = document.getElementById('inputDate').value;
    const resultDays = document.getElementById('resultDays');
    if (inputDate == '') {
        resultDays.textContent = 'Пожалуйста, введите дату рождения.';
        resultDays.style.color = 'red';
    }
    else {
        resultDays.style.color = 'black';
        const nowDate = new Date();
        const calcDay = Math.round((Date.parse(inputDate) - nowDate.getTime()) / 60000 / 60 / 24) + 1;
        if (calcDay > 0) {
            let word = dayTitle(calcDay);
            resultDays.textContent = `До вашего Дня рождения ${calcDay} ${word}.`;
        }
        else if (calcDay == 0) {
            resultDays.textContent = `Ваш День рождения сегодня.`;
        }
        else {
            let word = dayTitle(-calcDay);
            resultDays.textContent = `Ваш День рождения был ${-calcDay} ${word} назад.`;
        };
    };
}

function dayTitle(number) {
    if (number > 10 && [11, 12, 13, 14].includes(number % 100)) return 'дней';
    let last_num = number % 10;
    if (last_num == 1) return 'день';
    if ([2, 3, 4].includes(last_num)) return 'дня';
    if ([5, 6, 7, 8, 9, 0].includes(last_num)) return 'дней';
}

// Задание со звёздочкой
function send() {

    let strFIO = document.getElementById("inputFIO").value;
    let stringFIO = strFIO.trim();
    let checkbox = document.getElementById("flexRadioDefault1");

    if (stringFIO !== "" && checkbox.checked) {
        stringFIO = stringFIO.split(" ");
        let correctName = "";
        let partOfName = "";
        let ind = "";
        stringFIO.forEach((element) => {
            partOfName = element.toLowerCase().replace(element.substr(0, 1), element.substr(0, 1).toUpperCase());
            ind = partOfName.indexOf("-");
            if (ind !== -1) {
                partOfName = partOfName.replace(partOfName.substr(ind + 1, 1), partOfName.substr(ind + 1, 1).toUpperCase());
            }
            correctName = correctName + " " + partOfName;
        })
        strFIO = correctName;
    }
    else {
        strFIO = "username";
    }

    let strComment = document.getElementById("inputComment").value;
    let changedComment = strComment.replace(/viagra/gmi, "***");
    changedComment = changedComment.replace(/xxx/gmi, "***");
    let userAva = document.getElementById("basic-url").value;

    if (userAva.trim() === "") {
        let randomAva = Math.round(Math.random() * 10);
        userAva = `assets/images/${randomAva}.jpg`;
    }

    document.getElementsByClassName("chat")[0].classList.toggle("hiddenOn");
    document.getElementById("avatar").src = userAva;
    document.getElementById("fio").textContent = strFIO + " " + new Date();
    document.getElementById("comment").value = changedComment;
}



