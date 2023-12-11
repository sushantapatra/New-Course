//ES6 AKA- Ecmascript 2015

//let const (Block Scope)
var age = 18;
if (age >= 18) {
	let driving = true;
}
//console.log(driving);

//var (function scope)
function register() {
	var username = "Sushanta";
	var password = "secret";
}
//console.log(username);

var name = "Sushanta";
var name = "Ramesh";
console.log(name); //ramesh
