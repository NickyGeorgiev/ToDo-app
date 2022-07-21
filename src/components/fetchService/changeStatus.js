export const changeStatus = (id, data) => {

    let url = `https://parseapi.back4app.com/classes/todos/${id}`

    fetch(url, {
        method: 'PUT',
        headers: {
            "X-Parse-Application-Id": "f6zFRj3t8ITXPfjo6anwDxwoayU89nFrD3v6RYJf",
            "X-Parse-REST-API-Key": "YBH8FD1QgVH0jIwCHwOAlo1VRsjYWOAMJRCeZ4Zb",
            "accept": "application/json"
        },
        redirect: 'follow',
        body: JSON.stringify({
                "status": `${data}`
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error()
            }
            console.log('Ok');
        })
        .catch(error => alert('Upsss... its ERROR', error));

}