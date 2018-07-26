import * as React from "react";
import "./App.css";
import { InputForm } from "./Components/InputForm";

class App extends React.Component {
	public render() {
		return (
			<div className="App container">
				<InputForm />
			</div>
		);
	}
}

export default App;
