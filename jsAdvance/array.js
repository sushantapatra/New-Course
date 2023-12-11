const languageArr = [
	"Html",
	"Css",
	"Javascript",
	"PHP",
	"MySql",
	"Python",
	"Codeigniter",
];
const languageObj = {
	frontend: ["Html", "Css", "Javascript"],
	backend: ["PHP", "MySql", "Python"],
	framework: ["Codeigniter", "Laravel", "Bootstrap", "Django"],
};

// Check Array Length
console.log(languageArr.length);

// access array value
console.log(languageArr[2]);

// add value in a array - last index
languageArr.push("Dart");
// add value in a array - first index
languageArr.unshift("Java");

//remove value in a array - last index
languageArr.pop("Dart");

//remove value in a array - first index
languageArr.shift("Jave");

// access array in a loop - forEach
languageArr.forEach((element) => console.log(element));

// array data filter
const result = languageArr.filter((curElm) => curElm.length > 6);
console.log(result);

const fruits = ["apple", "banana", "grapes", "mango", "orange"];
/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
	return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}
console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']

console.log(languageArr);
// console.log(languageObj);

