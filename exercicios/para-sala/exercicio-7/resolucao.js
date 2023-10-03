function Account(numberAccount, agencyNumber, balance, bankNumber) {
  this.numberAccount = numberAccount;
  this.agencyNumber = agencyNumber;
  this.balance = balance;
  this.bankNumber = bankNumber;
}

Account.prototype.credit = function credit(amount) {
  this.balance += amount;
  console.log(`O novo valor é de ${this.balance}`);
}

Account.prototype.debit = function debit(amount) {
  if(this.balance >= amount) {
    this.balance -= amount;
    console.log(`O novo valor é de ${this.balance}`);
  } else {
    console.log('Você não tem saldo suficiente para essa operação.')
  }
}

Account.prototype.transferTo = function transferTo(anotherAccount, amount) {
  let tax = 0;

  if(this.bankNumber !== anotherAccount.bankNumber) {
    tax = 0.05;
  }

  const amountToDebit = amount + (amount * tax);

  if(this.balance >= amountToDebit) {
    this.balance -= amountToDebit;
    anotherAccount.balance += amount;
    console.log(`Transferência realizada com sucesso. Seu novo saldo é de ${this.balance}`)
  } else {
    throw 'Você não tem saldo suficiente para essa operação.'
  }
}

Account.prototype.closeAccount = function closeAccount() {
  if(this.balance === 0) {
    this.agencyNumber = undefined;
    this.numberAccount = undefined;
    this.bankNumber = undefined;
    this.balance = undefined;

    console.log('Conta encerrada com sucesso!');
  } else {
    console.log(`Seu saldo é diferente de zero. Conta não encerrada. Saldo atual: ${this.balance}`);
  }
}

module.exports = { Account }
