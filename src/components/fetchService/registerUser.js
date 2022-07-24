export const registerUser = (data) => {

    fetch("https://parseapi.back4app.com/classes/users", {
        method: 'POST',
        headers: {
            "X-Parse-Application-Id" : "f6zFRj3t8ITXPfjo6anwDxwoayU89nFrD3v6RYJf",
            "X-Parse-REST-API-Key" : "YBH8FD1QgVH0jIwCHwOAlo1VRsjYWOAMJRCeZ4Zb",
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            "email": data.email,
            "password": data.password
        })
    })
        .then(response => {
            if(response.ok){
                alert('Your account is created successfuly!')
            } else{
                throw new Error()
            }
        })
        .then(result => console.log(result))
        .catch(error => alert('Ups... is there problem :(', error));
}