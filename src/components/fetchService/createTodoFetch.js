export const createTodoFetch = (todo) => {

    fetch("https://parseapi.back4app.com/classes/todos", {
        method: 'POST',
        headers: {
            "X-Parse-Application-Id": "f6zFRj3t8ITXPfjo6anwDxwoayU89nFrD3v6RYJf",
            "X-Parse-REST-API-Key": "YBH8FD1QgVH0jIwCHwOAlo1VRsjYWOAMJRCeZ4Zb",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "title": todo.title,
            "owner": {
                "__type": "Pointer",
                "className": "users",
                "objectId": todo.owner,
            },
            "subtitle": todo.subtitle,
            "description": todo.description,
            "status": "start",
        })
    })
        .then(response => {
            if (response.ok) {
                alert('Your TODO is created successfuly!')
            } else {
                throw new Error()
            }
        })
        .catch(error => alert('Ups... is there problem :(', error));
}