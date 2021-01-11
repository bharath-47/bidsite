var login = document.getElementById('login');
var signup = document.getElementById('signup');
var loginform = document.getElementById('loginform')
var signupform = document.getElementById('signupform')
login.addEventListener('click', runlogin);
signup.addEventListener('click',runsubmit);

function runlogin(e)
{
	console.log(e);
	loginform.style.display ="block";
	signupform.style.display ="none";
	document.getElementById('main-container').style.backgroundColor="rgb(135, 26, 207)";
}

function runsubmit(e)
{
	console.log(e);
	signupform.style.display ="block";
	loginform.style.display = "none";
	document.getElementById('main-container').style.backgroundColor="grey";
}

runlogin();