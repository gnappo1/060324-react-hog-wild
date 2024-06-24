import React from "react";

import Nav from "./Nav";
import PigList from "./PigList"

import hogs from "../porkers_data";

function App() {
	// we need a component like PigList (that will map a list of objects into a list of pig tiles)
	// create another component PigTile which will decide  how to actually render each pig info onto the page
	return (
		<div className="App">
			<Nav />
			<PigList hogs={hogs} />
		</div>
	);
}

export default App;
