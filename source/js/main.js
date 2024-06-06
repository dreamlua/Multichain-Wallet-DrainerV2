AOS.init();

function startTimer(durationInSeconds) {
    let timer = durationInSeconds;
    const hoursElement = document.getElementById('h-time');
    const minutesElement = document.getElementById('m-time');
    const secondsElement = document.getElementById('s-time');

    const intervalId = setInterval(function () {
        const hours = Math.floor(timer / 3600);
        const minutes = Math.floor((timer % 3600) / 60);
        const seconds = timer % 60;

        updateDigitBlocks(hoursElement, hours);
        updateDigitBlocks(minutesElement, minutes);
        updateDigitBlocks(secondsElement, seconds);

        if (--timer < 0) {
            clearInterval(intervalId);
            alert('Таймер завершено!');
        }
    }, 1000);
}

function updateDigitBlocks(element, value) {
    const digits = element.getElementsByClassName('item');
    const valueString = value < 10 ? '0' + value : value.toString();

    digits[0].textContent = valueString[0];
    digits[1].textContent = valueString[1];
}

startTimer(8 * 60 * 60);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateAddress() {
    const characters = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    const addressLength = 16;

    let address = "0x";
    for (let i = 1; i < addressLength; i++) {
        const randomIndex = getRandomInt(0, characters.length - 1);
        address += characters[randomIndex];
    }

    return address + "...";
}

function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const gen = () => {
    if ($(".body-live>.item").length >= 5) {
        $(".body-live>.item").last().remove()
    }

    const item = $(".body-live>.item")[0];
    const clone = $(item).clone()

    $(clone).children("p").text(generateAddress())
    $(clone).children(".body-item-live").children(".ico-live").children("p").children("span").text(generateNumber(100, 5000))
    $(clone).children(".body-item-live").children("p").children("span").text(generateNumber(0, 60))

    $(".body-live").prepend(clone)
}

function run() {
    $(".body-live").prepend(gen());

    setTimeout(run, getime(4000, 10000));
}

run();
