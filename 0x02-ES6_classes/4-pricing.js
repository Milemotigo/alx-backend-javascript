import Currency from "./3-currency";

export default class Pricing {
    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }

    get amount() {
        return this._amount;
    }

    set amount(newAmount) {
        if (newAmount) {
            this._amount = newAmount;
        }
    }

    get currency() {
        return this._currency;
    }

    set currency(newCurrency) {
        if (newCurrency) {
            this._currency = newCurrency;
        }
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency._name} (${this._currency._code})`;
    }

    convertPrice(amount, conversionRate) {
        if(amount && conversionRate) {
            return amount * conversionRate
        }
    }
}