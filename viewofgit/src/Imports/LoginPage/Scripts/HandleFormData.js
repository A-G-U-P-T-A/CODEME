export const passwordStrength = (password) => {
	console.log(password);
	return true;
}

const validateEmail = (email) => {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

export const LoginData = (email, password) => {
	//console.log(email, password);
	if(email==null||password==null){
		console.log("Both fields required!!!");
	}
	if(!validateEmail(email)){
		console.log("Invalid email!!!");
		return false;
	}
	if(!passwordStrength(password)){
		console.log("Weak password!!!");
		return false;
	}
	return true;
} 