export const getTodo = (id, getTodoData) =>{

    let url = `https://parseapi.back4app.com/classes/todos?where=%7B%22owner%22%3A%20%7B%20%22__type%22%3A%20%22Pointer%22%2C%20%22className%22%3A%20%22users%22%2C%20%22objectId%22%3A%20%22${id}%22%20%7D%7D`
    
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
        if(result.results.length === 0){
            // alert('Грешно потребителско име или ипарола')
        } else {
            getTodoData(result.results);
        }
      })
      .catch(error => alert('error', error));

}