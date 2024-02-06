console.log('hello OOP!');
// Encapsulation
// Classes
// Assignment expression (+=)
// Conditional statement (if)

class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  widthdrawl(amount) {
    if (this.balance >= amount) {
      this.balance = this.balance - amount;
    } else {
      console.log(`Insufficient  Balance.`);
    }
  }
  deposit(amount) {
    this.balance = this.balance + amount;
  }
  getAccountInfo() {
    return `Account Number: ${this.accountNumber}, Balance: ${this.balance}`;
  }
}

const myAccount = new BankAccount(123, 500);

console.log(myAccount);
console.log(myAccount.deposit(1));
console.log(myAccount);
console.log(myAccount.widthdrawl(5));
console.log(myAccount.getAccountInfo());

const gabAccount = new BankAccount(9876543, 10000);
console.log(gabAccount.getAccountInfo());
