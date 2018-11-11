import './CSS/Login.css';
import './CSS/Search.css';
import {LoginData} from './Scripts/HandleFormData.js';
import React, {
	//Component 
} from 'react';

const handleClick = (e) => {
	e.preventDefault();
	console.log('The link was clicked.');
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
							<input name="name" placeholder="Enter the registered email id" type="text" required/><br/>
							<input password="password" placeholder="Enter password" type="password" required/><br/>
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
