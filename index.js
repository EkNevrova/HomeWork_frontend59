
// Задание 2
const firstText = 'у лукоморья клён зелёный; златая цепь на клён том; и днём и ночью кот учёный; всё ходит по цепи кругом; идёт направо — песнь заводит; налево — сказку говорит; там чудеса: там леший бродит; русалка на ветвях сидит; там на неведомых дорожках; следы невиданных зверей; избушка там на курьих ножках; стоит без окон, без дверей; там лес и дол видений полны; там о заре прихлынут волны; на брег песчаный и пустой; и тридцать витязей прекрасных; чредой из вод выходят ясных; и с ними дядька их морской; там королевич мимоходом; пленяет грозного царя; там в облаках перед народом; через леса, через моря; колдун несёт богатыря; в темнице там царевна тужит; а бурый волк ей верно служит; там ступа с бабою ягой; идёт, бредёт сама собой; там царь кащей над златом чахнет; там русский дух… там русью пахнет!; и там я был, и мёд я пил; у моря видел клён зелёный; под ним сидел, и кот учёный; свои мне сказки говорил.';
console.log(`1. Количество символов в тексте: ${firstText.length}`);

const result = firstText.replace(/;/g, ';\n');
console.log(`2. Текст с переносами строк: \n ${result}`);

const substring = result.replace('\s', '');
console.log(`3. Текст с удалёнными пробелами: ${substring}`);

const newText = result.substring(27, 50);
console.log(`4. Извлечение подстроки: ${newText}`);

const replacedText = newText.replace(/клён/g, 'дубе');
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);

const replacedText2 = result.toUpperCase();
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);

const replacedText3 = result.replace(/клён/g, 'дубе');
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);

const index = firstText.indexOf('моря');
console.log(`8. Индекс первого вхождения "моря": ${index}`);

const modifiedText = replacedText.replace(replacedText.substr(0, 1), replacedText.substr(0, 1).toUpperCase())
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);

// Задание 3
function calculateBMI() {
    const inputWeight = document.getElementById("inputWeight").value;
    const inputGrowth = (document.getElementById("inputGrowth").value) / 100;
    const resultIMT = (inputWeight / Math.pow(inputGrowth, 2)).toFixed(2);
    document.getElementById('resultIMT').textContent = `Индекс массы тела (ИМТ): ${resultIMT}`;
}


// Задание со звёздочкой
function send() {

    let strFIO = document.getElementById("inputFIO").value;
    let stringFIO = strFIO.trim().split(" ");
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
    let strComment = document.getElementById("inputComment").value;
    let changedComment = strComment.replace(/viagra/gmi, "***");
    changedComment = changedComment.replace(/xxx/gmi, "***");
    let userAva = document.getElementById("basic-url").value;

    document.getElementsByClassName("chat")[0].classList.toggle("hiddenOn");
    document.getElementById("avatar").src = userAva;
    document.getElementById("fio").textContent = correctName;
    document.getElementById("comment").value = changedComment;

}
