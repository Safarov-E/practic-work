let money, time;
function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function() {
        for(let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");
        
            if((typeof(a)) != null && (typeof(b)) != null
                && a != '' && b != '' && a.length < 50) {
                console.log('Всё верно');
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function() {
        this.monePerDay = (this.budget / 30).toFixed();
        alert("Ежедневный бюджет " + this.monePerDay);
    },
    detectLever: function() {
        if(appData.monePerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.monePerDay > 100 && appData.monePerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.monePerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибки");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for(let i = 1; i < 3; i++) {
            let opt = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    }
}



appData.monePerDay = (appData.budget / 30).toFixed();

alert("Ежедневный бюджет: " + appData.monePerDay);