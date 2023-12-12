class BankAccount {
	//define properties
	customerName;
	accountNo;
	balance;

	constructor(customerName, balance = 0) {
		//assign value in properties
		this.customerName = customerName;
		this.accountNo = Date.now();
		this.balance = balance;
	}

	// define Deposit methods
	deposit(amount) {
		this.balance += amount;
	}
	// define withdraw methods
	withdraw(amount) {
		this.balance -= amount;
	}
}
const sushantaAccount = new BankAccount("Sushanta Patra");
sushantaAccount.deposit(5000);
sushantaAccount.withdraw(200);
console.log(sushantaAccount);
