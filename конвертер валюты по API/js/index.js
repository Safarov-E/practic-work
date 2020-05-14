let inputRub = document.getElementById('rub'),
    inputCurrencies = document.getElementById('currencies'),
    optionTag = document.querySelector('.option'),
    buttonTag = document.querySelector('.btn-primary'),
    currency = document.querySelector('.Currency'),
    course = document.querySelector('.Course'),
    payment = document.querySelector('.Payment'),
    span = document.querySelector('span')

fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then((response) => response.json())
    .then((jsonStr) => {
        for(let key in jsonStr.Valute) {
            optionTag.innerHTML += `<option>${jsonStr.Valute[key].Name}</option>`
            buttonTag.addEventListener('click', function() {
                if(optionTag.value === jsonStr.Valute[key].Name) {
                    currency.textContent = jsonStr.Valute[key].Name;
                    course.textContent = jsonStr.Valute[key].Value;
                    payment.textContent = inputRub.value / jsonStr.Valute[key].Value;
                    span.textContent = jsonStr.Valute[key].CharCode;
                }
            })
        }
    })
