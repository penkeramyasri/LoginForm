document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  //var errorMessage = document.getElementById('error-message');
  if (username === '' || password === '') {
    document.getElementById('error-message').innerText = 'Invalid username or password.';
  } else {
    if (username === 'demo_username' && password === 'password') {
        document.getElementById('error-message').innerText = 'Login successful!';
    } else {
        document.getElementById('error-message').innerText ='Invalid username or password.';
    }
  }
  });



/*const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode.parentNode;
    if(this.value=""){
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) =>{
    input.addEventListener("focus",focusFunc);
    input.addEventListener("blur",blurFunc);
});*/
 
/*var input1 = document.querySelectorAll(".input")[0];
var input2 = document.querySelectorAll(".input")[1];

function login(){
if((input1 === "candyrose@gmail.com") && (input2 === "Rose@11")){
    alert("Details found in Database.You are logged in.");
}
else{
    alert("Please Check the details and try again.")
}
}*/
