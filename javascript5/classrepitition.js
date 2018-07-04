// 1. Bank Account
// 2. Game
// 3. Good


let person = {
    firstname: 'Nemer',
    lastname: 'Sahli'
};

let bankAccount = {
    iban: 'XX1929384840917123849132',
    bic: 'XXXXXXX',
    currency: 'EUR',
    type: 'giro',
    balance: 1000000,
    onlineBanking: false,
    maxcredit: 2500,
    owner: person
};

class BankAccount {
    constructor(iban, bic, currency, type, balance, 
                onlineBanking, maxcredit, owner) {

        this.iban = iban;
        this.bic = bic;
        this.currency = currency;
        this.type = type;
        this.balance = balance;
        this.onlineBanking = onlineBanking;
        this.maxcredit = maxcredit;
        this.owner = owner;
        
    }


    getIban() {
        return this.iban;
    }

    getBic() {
        return this.bic;
    }


    getCurrency() {
        return this.currency;
    }

    getType() {
        return this.type;
    }

    getBalance() {
        return this.balance;
    }

    getOnlineBanking() {
        return this.onlineBanking;
    }

    getMaxCredit() {
        return this.maxcredit;
    }

    getOwner() {
        return this.owner;
    }

}

let jan = {name: 'Jan', lastname: 'Schulz'};


let jansAccount = new BankAccount(
    '109248293',
    'XY12345',
    'EUR',
    'giro',
    1000,
    true,
    800,
    jan
)

let jans2ndAccount = new BankAccount(
    '109248293',
    'XY12345',
    'EUR',
    'giro',
    1000,
    true,
    800,
    jan
);

class AIBankAccount extends BankAccount {
    constructor(iban, bic, currency, type, balance, 
        onlineBanking, maxcredit, owner, behaviour) {
        super(iban, bic, currency, type, balance, 
            onlineBanking, maxcredit, owner);
        this.behaviour = behaviour;

    }


    getIban() {
        return this.iban;
    }

    getBic() {
        return this.bic;
    }


    getCurrency() {
        return this.currency;
    }

    getType() {
        return this.type;
    }

    getBalance() {
        return this.balance;
    }

    getOnlineBanking() {
        return this.onlineBanking;
    }

    getMaxCredit() {
        return this.maxcredit;
    }

    getOwner() {
        return this.owner;
    }


    analyze() {
        if(this.behaviour === 'spendall')
            return;
        else if (this.behaviour === 'saveall')
            return;
        else
            return;
    }
}


class SavingsAccount extends BankAccount {
    constructor(iban, bic, currency, type, withdrawalPeriod) {
        super(iban, bic, currency, type);

        this.withdrawalPeriod = withdrawalPeriod;

    }

    withdrawal() {
        if (this.withdrawalPeriod > 6)
            return true;
        else
            return false;
    }
}


class creditAccount extends BankAccount {
    constructor(iban, bic, currency, type, creditLimit) {
        super(iban, bic, currency, type);

        this.creditLimit = creditLimit;
    }


}


class giroAccount extends BankAccount {
    constructor(iban, bic, currency, type, directPay, negativeInterest = 0.17) {
        super(iban, bic, currency, type);

        this.directPay = directPay;
        this.negativeInterest = negativeInterest;
    }

    getIban() {
        return this.iban;
    }

    getBic() {
        return this.bic;
    }


    getCurrency() {
        return this.currency;
    }

    getType() {
        return this.type;
    }

    getDirectPay() {
        return this.directPay;
    }

        
    getNInterest() {
        return negativeInterest;
    }


}



class offshoreAccount extends BankAccount {
    constructor(iban, bic, currency, type, tax, depositAmmount, protection) {
        super(iban, bic, currency, type);

        this.tax = tax;
        this.depositAmmount = depositAmmount;
        this.protection = protection;

    }
}


