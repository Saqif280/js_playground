var Bank = {
  balance: 100
}
function spendMoney(a){
  console.log('Your new balance is: ', this.balance - a)
}


// ----- CALL -----

// this = Bank, a = 10
spendMoney.call(Bank, 10);


// ----- APPLY -----

// this = Bank, [a = 10]
spendMoney.call(Bank, [10]);


// ----- BIND -----

var spendMoneyAtMyBank = spendMoney.bind(Bank);
spendMoneyAtMyBank(10);
