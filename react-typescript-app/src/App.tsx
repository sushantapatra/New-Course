import "./App.css";

function App() {
	let pStyle = {
		fontSize: "15px",
		color: "blue",
	};
	return (
		<div className="App">
			<h1 style={{ color: "red", fontSize: "35px" }}>
				React Typescript Learn
			</h1>
			<p style={pStyle}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
				laudantium deleniti magnam a eos! Quas distinctio illo modi quam
				iure nulla ratione nobis nesciunt, veritatis necessitatibus
				illum, enim ea. Ab!
			</p>
		</div>
	);
}

export default App;
