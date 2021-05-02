import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import login from "./Pages/login";

function App() {
	return (
		<Switch>
			<Route exact path="/">
				Dashboard
			</Route>
			<Route exact path="/login" component={login} />
			<Route path="*" render={() => "404 Not found!"} />
		</Switch>
	);
}

export default App;
