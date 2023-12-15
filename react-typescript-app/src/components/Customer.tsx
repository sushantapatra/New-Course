import { useState } from "react";

interface IPROPS {
	name: string;
	age?: number | string;
}
interface IState {
	name: string;
	age?: number | string;
}
const Customer: React.FC<IPROPS> = ({ name, age }) => {
	const [state, setState] = useState<IState>({ name: "Sushanta", age: 0 });
	return (
		<>
			<h1>Customer Name : {name}</h1>
			<p>Age : {age}</p>
			<p>Name : {state.name}</p>
		</>
	);
};

export default Customer;
