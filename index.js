
function submitData(name, email) {
    const reqBody = {
        name: name,
        email: email
    };

    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json",
        },
        body: JSON.stringify(reqBody)
    })
    .then(response => response.json())
    .then(data => functionData(data)
        )
    .catch(error => {
        console.error('Error sending data:', error);
    });
}
function functionData(data){
    const newid =data.id;
    const createid=document.createElement('p')
    createid.textContent=`New ID: ${newid}`;

      document.body.appendChild(createid);
}

// Example usage:
submitData('Steve', 'steve@steve.com');