// ************ PART 1 ***************** //

function btnClick(){
	console.log("Hey! I'm inside the btnClick()!!");
	var user = document.getElementById('username').value;
	var pass = document.getElementById('password').value;

	console.log("username is:: " + user);
	console.log("password is:: " + pass);


	var userBoolean = true;
	var passBoolean = true;

	//check if password is correct
	if(pass != "12345678"){
		passBoolean = false;
		//send an alert
		alert("Invalid password");
	}
	else{
		alert("password is ok");
	}

	

	//check if user length is greater than 0
	if( user.match(/\d/g) == null){
		passBoolean = false;
		alert("username is incorrect!");
	}

	if( (passBoolean === true) && (userBoolean === true)){
		//display h1 tag
		document.getElementById("header").innerHTML = "Congrats! Username and password is correct!";
	}



}

// ************ PART 2 ***************** //

function keyPress(event){
	var x = event.key;
	document.getElementById("result").innerHTML = "The key that was pressed was: " + x;
}


