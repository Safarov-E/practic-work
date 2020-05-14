let inputRub = document.getElementById('rub'),
    inputCurrencies = document.getElementById('currencies'),
    optionTag = document.querySelector('.option'),
    buttonTag = document.querySelector('.btn-primary'),
    currency = document.querySelector('.Currency'),
    course = document.querySelector('.Course'),
    payment = document.querySelector('.Payment'),
    span = document.querySelector('span');
    
var request = new XMLHttpRequest;
request.overrideMimeType("application/json");
request.addEventListener('readystatechange', function(){
    if(request.readyState === 4 && request.status == 200) {
        let valute = JSON.parse(request.response);
        for(let key in valute.Valute) {
            optionTag.innerHTML += `<option>${valute.Valute[key].Name}</option>`
            buttonTag.addEventListener('click', function() {
                if(optionTag.value === valute.Valute[key].Name) {
                    currency.textContent = valute.Valute[key].Name;
                    course.textContent = valute.Valute[key].Value;
                    payment.textContent = inputRub.value / valute.Valute[key].Value;
                    span.textContent = valute.Valute[key].CharCode;
                }
            })
        }
    }
});
request.open("GET", 'https://www.cbr-xml-daily.ru/daily_json.js', !0);
request.send()