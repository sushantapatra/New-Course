import "./App.css";
import Customer from "./components/Customer";

function App() {
	return (
		<div className="App">
			<h1 className="text-bg-danger my-4 p-4">React Typescript Learn</h1>
			<Customer name="Sushanta Patra" age={21} />
		</div>
	);
}

export default App;
