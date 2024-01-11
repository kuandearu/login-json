

function login(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    fetch("data.json")
    .then(response => response.json())
    .then(data => {
        const user = validAccess(username, password, data);
        if(user != null){
            if(user.role === 'client'){
                window.location.href = "client.html";
            }
            else if(user.role === 'admin'){
                window.location.href = "admin.html";
            }
            else{
                alert("Invalid username or password! Please try again!");
            }
        }
    });
}

function validAccess(username, password, data){
    users = data.login;
        
    return users.find(user => username === user.username && password === user.password);
}
