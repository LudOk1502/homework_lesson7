/*Зробити свій розпорядок дня.

У вас має бути більше 10 асинхронних дій з рандомними затримками.
Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.

Напиклад.
Прикнутись - 0.3с
Поснідати - 1с
Піти в душ - 0.5с
Дочекатись автобус - 3с
Пообідати - 1с

І так далі*/

function wakeUp(hour) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('-Подивись котра година-');

            if (hour < 7) {
                console.log('You can sleep');
                reject('Ще можна поспати');
            } else {
                console.log('Пора вставати! Добрий ранок!');
                resolve('Добрий ранок!');
            }
        }, 300)
    });
}

function day() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const day = prompt('Який сьогодні день?');
            if (day === 'Saturday' || day === 'Sunday') {
                console.log('weekend');
                reject('Сьогодні вихідний!');
            } else {
                console.log('Сьогодні робочий день!');
                resolve('До роботи!');
            }
        }, 200)
    });
}

function wash(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('-Пора вмиватись-');
            resolve('Good');
        }, 500)
    });
}

function eat(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('-Пора поїсти!-');
            resolve('Super!');
        }, 500)
    });
}

function work(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let productivity = prompt('Наскільки (%) добре виконав роботу?');
            if (productivity < 50) {
                console.log('Старайся краще! Працюй!');
                reject('Немає грошей');
            } else {
                console.log('Отримай зарплату!');
                resolve('Гроші є!');
            }
        }, 1000)
    });
}

function free_time(many) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Відпочивай з друзями!');
            resolve('Good');
        }, 500)
    });
}

async function routine() {
    try {
        await wakeUp();
        await wash();
        await eat();
        await day();
        await work();
        await free_time();
        await eat();
    } catch (reason) {
        console.warn(reason)
    }
}

routine(9);


