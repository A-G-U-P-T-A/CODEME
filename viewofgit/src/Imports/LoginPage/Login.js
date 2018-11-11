import './CSS/Login.css';
import './CSS/Search.css';
import {LoginData, passwordStrength} from './Scripts/HandleFormData.js';
import React, {
	//Component 
} from 'react';

var state = {
	email: '',
	password: '',
}

const checkPassword = (e) => {
	e.preventDefault();
	const password = document.getElementById('password').value;
	//console.log(password);
	if(!passwordStrength(password)){
		console.log("Weak Password");
	}
	console.log("Password Strong enough");
}

const handleClick = (e) => {
	e.preventDefault();
	const emailId = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	//console.log(emailId+" "+password);
	if(LoginData(emailId, password)){
		return;
	}
	state.email = emailId;
	state.password = password;
	//document.setElementById
	//console.log(state.email+" "+state.password);
}

export const LoginPage = _ => {
	return(
		<div>
			<div className="header">
				<div className="Title">CODE ME</div>
				<div className="Search">
					<form id="demo-2">
						<input type="search" placeholder="Search"/>
					</form>
				</div>
			</div>
			<div>
				<section className="container">
					<div className="Login">
						<div className="LogInHeader">Login With Email & Password</div>
						<form>
							<input id="email" name="email" placeholder="Enter the registered email id" type="text" required/><br/>
							<input id="password" password="password" placeholder="Enter password" type="password" onChange={e => checkPassword(e)} required/><br/>
							<input type="Submit" onClick={e => handleClick(e)}/>
						</form>
					</div>
					<div className="LoginOAuth">
						<div className="LogInHeader">Login With Google, Facebook or Github</div>
						<button className="button_google">Log In With Google</button><br/>
						<button className="button_facebook">Log In With Facebook</button><br/>
						<button className="button_github">Log In With Github</button>
					</div>
				</section>
			</div>
			<div className="footer">
				<div>Careers</div>
				<div>Help</div>
				<div>FAQs</div>
				<div>Feedback</div>
			</div>
		</div>
	);
}
