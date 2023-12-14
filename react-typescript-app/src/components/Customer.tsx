interface IPROPS {
	name: string;
	age?: number | string;
}
const Customer: React.FC<IPROPS> = ({ name, age }) => {
	return (
		<>
			<h1>Customer Name : {name}</h1>
			<p>Age : {age}</p>
		</>
	);
};

export default Customer;
