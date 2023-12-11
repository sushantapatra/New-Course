class BankAccount {
	constructor(customerName, balance = 0) {
		//define properties
		this.customerName = customerName;
		this.accountNo = Date.now();
		this.balance = balance;

		// define methods
		this.deposit = function (amount) {
			this.balance += amount;
		};

		this.withdraw = (amount) => {
			this.balance -= amount;
		};
	}
}

// const sushantaAccount = new BankAccount("Sushanta Patra", 1000);
// sushantaAccount.deposit(500);
// sushantaAccount.withdraw(200);
// console.log(sushantaAccount);

//==============
const accounts = [];

//create a account
const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");
const showAccountNumber = document.querySelector("#showAccountNumber");
accountForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const account = new BankAccount(customerName.value, +balance.value);
	accounts.push(account);
	showAccountNumber.innerHTML = account.accountNo;
	console.log(accounts);
});

//deposit  account
const depositForm = document.querySelector("#depositForm");
const accountNumber = document.querySelector("#accountNumber");
const amount = document.querySelector("#amount");

depositForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const account = accounts.find(
		(account) => account.accountNo === +accountNumber.value
	);
	account.deposit(+amount.value);
	console.log(accounts);
});

//widraw  account
const withdrawForm = document.querySelector("#withdrawForm");
const waccountNumber = document.querySelector("#waccountNumber");
const wamount = document.querySelector("#wamount");
withdrawForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const account = accounts.find(
		(account) => account.accountNo === +waccountNumber.value
	);
	account.withdraw(parseInt(wamount.value));
	console.log(accounts);
});
