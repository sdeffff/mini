
//class for api
class Freecurrencyapi {
    baseUrl = 'https://api.freecurrencyapi.com/v1/';

    constructor(apiKey = '') {
        this.headers = {
            apikey: apiKey
        };
    }

    call (endpoint, params = {}) {
        const paramString = new URLSearchParams({
            ...params
        }).toString();

        return fetch(`${this.baseUrl}${endpoint}?${paramString}`, { headers: this.headers })
            .then(response => response.json())
            .then(data => {
                return data;
            });
    }

    status () {
        return this.call('status');
    }

    currencies (params) {
        return this.call('currencies', params);
    }

    latest (params) {
        return this.call('latest', params);
    }

    historical (params) {
        return this.call('historical', params);
    }

}

const freecurrencyapi = new Freecurrencyapi('fca_live_TFCe23fCqTaSYe9EbvpxdkHuSnp7spQtu4Vxwmo1');

const firstCurrencyType = document.getElementById("first_currency"),
secondCurrencyType = document.getElementById("second_currency"),
btn = document.getElementById("submitBtn"),
amount = document.getElementById("amount"),
res = document.getElementById("res"),
firstCurrImg = document.getElementById("first_curr_img"),
secondCurrImg = document.getElementById("second_curr_img");

firstCurrencyType.addEventListener("click", () => {
    firstCurrImg.src = `../../images/currency-images/${firstCurrencyType.options[firstCurrencyType.options.selectedIndex].innerText.toLowerCase()}.png`;
})

secondCurrencyType.addEventListener("click", () => {
    secondCurrImg.src = `../../images/currency-images/${secondCurrencyType.options[secondCurrencyType.options.selectedIndex].innerText.toLowerCase()}.png`;
})

btn.addEventListener("click", () => {
    if(amount.value == false) {
        alert("Write correct value for the first field, please!");
        return;
    }

    freecurrencyapi.latest({
        base_currency: firstCurrencyType.options[firstCurrencyType.options.selectedIndex].innerText,
        currencies: secondCurrencyType.options[secondCurrencyType.options.selectedIndex].innerText
    }).then(response => {
        res.innerText = (response.data[secondCurrencyType.options[secondCurrencyType.options.selectedIndex].innerText] * +amount.value).toFixed(2);
    });
})

window.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        if(amount.value == false) {
            alert("Write correct value for the first field, please!");
            return;
        }
    
        freecurrencyapi.latest({
            base_currency: firstCurrencyType.options[firstCurrencyType.options.selectedIndex].innerText,
            currencies: secondCurrencyType.options[secondCurrencyType.options.selectedIndex].innerText
        }).then(response => {
            res.innerText = (response.data[secondCurrencyType.options[secondCurrencyType.options.selectedIndex].innerText] * +amount.value).toFixed(2);
        });
    }
})