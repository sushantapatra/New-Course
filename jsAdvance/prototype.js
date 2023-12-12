//prototype
//constructor function
function BankAccount(customerName, balance = 0) {
	//define properties
	this.customerName = customerName;
	this.accountNo = Date.now();
	this.balance = balance;

	// define methods
	// this.deposit = function (amount) {
	// 	this.balance += amount;
	// };

	// this.withdraw = (amount) => {
	// 	this.balance -= amount;
	// };
}
BankAccount.prototype.deposit = function (amount) {
	this.balance += amount;
};
BankAccount.prototype.withdraw = function (amount) {
	this.balance -= amount;
};
const sushantaAccount = new BankAccount("Sushanta Patra");
sushantaAccount.deposit(500);
sushantaAccount.withdraw(200);

console.log(BankAccount.prototype);
console.log(sushantaAccount);
