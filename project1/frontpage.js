document.getElementById("menu").addEventListener("click",function(){
    var check = document.getElementById("menu_bar").style.display;
    if (check ==="block") {
        document.getElementById("menu_bar").style.display = "none";    
    }
    else{
        document.getElementById("menu_bar").style.display = "block";
    }

});

document.getElementById("menuclose").addEventListener("click",function(){
    var check = document.getElementById("menu_bar").style.display;
    if (check === "none") {
        document.getElementById("menu_bar").style.display ="block";
        
    }
    else{
        document.getElementById("menu_bar").style.display = "none";
    }
});
//login and logout script-----
function signin(){
    globalThis.user = document.getElementById("user").value;
    globalThis.pass = document.getElementById("pass").value;
    globalThis.email = document.getElementById("email").value;
    globalThis.c_pass = document.getElementById("c_pass").value;
    var show = document.getElementById("signin").style.display;
    if (globalThis.user !== "" && globalThis.email !== "" && globalThis.pass !=="") {
        if (globalThis.pass === globalThis.c_pass) {
            alert("Signin Successful")
            if(show === ""){
                document.getElementById("signin").style.display="none";
                document.getElementById("login").style.display = "flex"
            }
        }
        else{
            console.error("password doesn't match");
            alert("Password not Match");
        }
        
    }
    else{
        alert("Fill The Values!!!")
    }

    
}
function login(){
    var pass_email = document.getElementById("l_email").value;
    var login_pass = document.getElementById("l_pass").value;
    if (pass_email !== "" && login_pass !== "") {
        if (pass_email === globalThis.email && login_pass === globalThis.pass) {
            console.log("login successful");
            alert("Login successfull!!")
            window.location.href="index.html";
        }
        else{
            console.error("worng password!!");
            alert("Wrong Password or Email")
        }
        
    }
    else{
        alert("Enter the value for Email or Password!!!")
    }

}
function logout(){
    window.location.href="login.html";
}

