export const loginUser = (data) => {

    let email = encodeURIComponent(data.email);
    let password = encodeURIComponent(data.password);

    let url = `https://parseapi.back4app.com/classes/users?where=%7B%20%22email%22%3A%20%22${email}%22%2C%20%22password%22%3A%20%22${password}%22%7D`

    console.log(url);
    
    fetch(url, {
        method: 'GET',
        headers: {
            "X-Parse-Application-Id" : "f6zFRj3t8ITXPfjo6anwDxwoayU89nFrD3v6RYJf",
            "X-Parse-REST-API-Key" : "YBH8FD1QgVH0jIwCHwOAlo1VRsjYWOAMJRCeZ4Zb"
        },
        redirect: 'follow'
    })
      .then(response => response.json())
      .then(result => {
        if(result.results.length == 0){
            alert('Грешно потребителско име или ипарола')
        } else {
            return result.results;
        }
      })
      .catch(error => alert('error', error));
}