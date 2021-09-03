document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const currency = document.getElementById('currency'),
        direction = document.getElementById('direction'),
        btn = document.getElementById('btn'),
        input = document.getElementById('in'),
        out = document.getElementById('out'),
        inputSpan = document.querySelector('.in'),
        outSpan = document.querySelector('.out');


    const calc = (rates) => {

        if (currency.value === 'eur') {

            if (direction.value === 'sell') {
                out.value = (input.value * rates.RUB).toFixed(2);
            } else {
                out.value = (input.value / rates.RUB).toFixed(2);
            }

        } else if(currency.value === 'usd') {

            if (direction.value === 'sell') {
                out.value = (input.value * rates.RUB / rates.USD).toFixed(2);
            } else {
                out.value = (input.value / rates.RUB * rates.USD).toFixed(2);
            }

        }
    };

    const getSelect = () => {
        if(currency.value === 'no' || direction.value === 'no') {
            return;
        }
        if (currency.value === 'eur') {

            if (direction.value === 'sell') {
                inputSpan.textContent = 'EUR';
                outSpan.textContent = 'RUB';
            } else {
                inputSpan.textContent = 'RUB';
                outSpan.textContent = 'EUR';
            }

        } else if(currency.value === 'usd') {

            if (direction.value === 'sell') {
                inputSpan.textContent = 'USD';
                outSpan.textContent = 'RUB';
            } else {
                inputSpan.textContent = 'RUB';
                outSpan.textContent = 'USD';
            }
        }
    };

    const url = 'http://api.exchangeratesapi.io/v1/latest?access_key=c7668abb45c0b6b531a4a4f39bb572f4&symbols=USD,RUB';
    const getData = () => fetch(url);

    btn.addEventListener('click', () => {
        if(currency.value === 'no' || direction.value === 'no') {
            console.log('Не выбрано валюта или направление');
            return;
        }
        getData(currency.value)
        .then(response => response.json())
        .then(response => calc(response.rates))
        .catch(error => console.error('Ошибка: ', error));
    });

    currency.addEventListener('change', getSelect);
    direction.addEventListener('change', getSelect);
});
