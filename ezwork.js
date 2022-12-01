function checkAuth(){
    if (document.getElementById("pass").value == "cyDDBPf"){
        document.getElementById("iframe").src = "https://teachers.beauty";
        document.getElementById("destroy").remove();
        alert("Authorized... Loading")
    }
    else{
        document.getElementById("destroy").remove();
        document.getElementById("iframe").remove();
        document.getElementById("hidden").innerText = "Unauthorized.";
    }
}

function handler(event){
    if (event.key == "Enter"){
        checkAuth();
    }
}