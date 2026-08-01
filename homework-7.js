function weatherReport(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

weatherReport("Москва", 22);
weatherReport("Санкт-Петербург", 18);


const SPEED_OF_LIGHT = 299792458;

function checkSpeed(speed) {
    if (speed > SPEED_OF_LIGHT) {
        console.log("Сверхсветовая скорость");
    } else if (speed < SPEED_OF_LIGHT) {
        console.log("Субсветовая скорость");
    } else {
        console.log("Скорость света");
    }
}

checkSpeed(150000000);
checkSpeed(299792458);
checkSpeed(300000000);


const product = "Ноутбук";
const price = 85000;

function purchase(budget) {
    if (budget >= price) {
        console.log(`${product} приобретён. Спасибо за покупку!`);
    } else {
        const shortfall = price - budget;
        console.log(`Вам не хватает ${shortfall}$, пополните баланс`);
    }
}

purchase(100000);
purchase(50000);


function canPassExam(score) {
    const passingScore = 60;
    if (score >= passingScore) {
        console.log(`Поздравляю! Ты сдал экзамен с ${score} баллами.`);
    } else {
        console.log(`К сожалению, не хватило ${passingScore - score} баллов. Попробуй ещё!`);
    }
}

canPassExam(75);
canPassExam(45);


let dollarRate = 92.5;
let euroRate = 99.8;
let yuanRate = 12.7;

console.log(`Курс доллара: ${dollarRate} ₽`);
console.log(`Курс евро: ${euroRate} ₽`);
console.log(`Курс юаня: ${yuanRate} ₽`);