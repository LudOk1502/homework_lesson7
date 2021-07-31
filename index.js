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

function day(day) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('-Який сьогодні день?-');

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
            if (value === 'Добрий ранок!')
                console.log('-Пора вмиватись-');
            console.log('Good look!');
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

function free_time(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value !== 'Гроші є!') {
                console.log('Виконуємо роботу по дому!');
                reject('Evening');
            } else {
                console.log('Відрочивай з друзями!');
                resolve('Evening');
            }
        }, 500)
    });
}


wakeUp(8).then((value => wash(value))).then(() => {
    return eat()
}).then(() => {
    return day()
}).then((value) => {
    return work(value);
}).then((value) => {
    return free_time(value)
}).then((value) => {
    return eat(value)
}).catch(reason => {
    console.log('************* ERROR *************')
    console.log(reason)
    console.log('************* ERROR *************')
})



