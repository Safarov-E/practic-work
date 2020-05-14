let inputRub = document.getElementById('rub'),
    inputCurrencies = document.getElementById('currencies'),
    optionTag = document.querySelector('.option'),
    buttonTag = document.querySelector('.btn-primary');

fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then((response) => response.json())
    .then((jsonStr) => {
        for(let key in jsonStr.Valute) {
            optionTag.innerHTML += `<option>${jsonStr.Valute[key].Name}</option>`
        }
        buttonTag.addEventListener('click', function() {
            console.log(optionTag.value)
        })
    })
