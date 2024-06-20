document.addEventListener('DOMContentLoaded', function () {
    const currencySelector = document.getElementById('currency');
    const prices = document.querySelectorAll('.price');

    currencySelector.addEventListener('change', function () {
        const selectedCurrency = currencySelector.value;

        prices.forEach(price => {
            const priceInUSD = price.getAttribute('data-usd');
            const priceInEUR = price.getAttribute('data-eur');
            const priceInGBP = price.getAttribute('data-gbp');

            switch (selectedCurrency) {
                case 'USD':
                    price.textContent = $${priceInUSD}/month;
                    break;
                case 'EUR':
                    price.textContent = €${priceInEUR}/month;
                    break;
                case 'IND':
                    price.textContent = £${priceInRSSSS}/month;
                    break;
            }
        });
    });
});