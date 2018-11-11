const scorePassword = (pass) => {
	var score = 0;
	if (!pass)
		return score;
 
	var letters = new Object();

	for (var i=0; i<pass.length; i++) {
		letters[pass[i]] = (letters[pass[i]] || 0) + 1;
		score += 5.0 / letters[pass[i]];
	}
 
	var variations = {
		digits: /\d/.test(pass),
		lower: /[a-z]/.test(pass),
		upper: /[A-Z]/.test(pass),
		nonWords: /\W/.test(pass),
	}
    
	var variationCount = 0;
	for (var check in variations) {
	    variationCount += (variations[check] == true) ? 1 : 0;
	}
	score += (variationCount - 1) * 10;
    
	return parseInt(score);
}

export const passwordStrength = (password) => {
	//console.log(password);
	var score = scorePassword(password);
	if (score > 80)
		return "strong";
	if (score > 60)
		return "good";
	if (score >= 30)
		return "weak";
	return "very weak";
	//return true;
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