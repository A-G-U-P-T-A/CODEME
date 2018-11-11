import React, { Component } from 'react';
import './App.css';
import {LoginPage} from './Imports/LoginPage/Login.js';

class App extends Component {

	isLoggedIn(){

	}

	renderLoginPage() {
		return LoginPage();
	}

	renderHomePage() {
		return(
			<div className="App">
				Hello World
			</div>
		);
	}

	render() {
		return(this.renderLoginPage());	
		//return(this.renderHomePage());
	}
}

export default App;
