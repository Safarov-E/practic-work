let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let costs = prompt("Введите обязательную статью расходов в этом месяце", "");
let amount = prompt("Во сколько обойдется?", "");

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {
        costs : amount
    },
    optionalExpenses: '',
    income: '',
    savings: false
}

let moneyData = +money / 30;
alert("Ваш бюджет на месяц " + moneyData.toFixed(2))