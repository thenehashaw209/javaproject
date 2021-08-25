function validate()
{
    var text = document.getElementById('text').Value;
    var password = document.getElementById('password').Value;
    if(text =="admin" && password=="user"){
        alert("login successfully");
        return false;
    } else{
        alert("login failed")
    }

}