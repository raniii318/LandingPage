
if (typeof document !== "undefined") {   
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    const login = document.querySelector("#submit");
    let user = "abc";
    let pass = 123;
    
    function Redirect(){
        window.location = "https://www.google.com"
    }
    
    login.addEventListener("click" , () => {
        if(username.value == user && password.value == pass){
            document.write("You will be redirected to main page in 4 sec.");
            setTimeout(Redirect , 5000);
        }
        else{
            alert("Login failed");
        }
    });

}