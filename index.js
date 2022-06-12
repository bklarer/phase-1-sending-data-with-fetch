// Add your code here
function submitData(firstName, email) {
    return fetch("http://localhost:3000/users", {
        method:"POST",
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json",
        },
        body:JSON.stringify({
            "name": firstName,
            "email":email
        })
    })
        .then(res => res.json())
        .then(data => renderId(data))
    .catch((error) => {
        document.body.innerHTML = error;
    })
        
}

const renderId = data => {
    document.body.innerHTML = data.id;
}