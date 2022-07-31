document.querySelector('#addClient').addEventListener('click', (event) => {

    window.location.href = '/client/newClient';
});


const deleteClient = async (event) => {
    
    //gets the treatment id just selected
    const item = event.target;
    const client = item.parentElement;
    const clientID = client.id

    console.log(clientID);

    const response = await fetch(`/client?id=${clientID}`, { method: 'DELETE'})

    const json = await response.json();

    alert("Client was Deleted");
    client.remove();
    
}

const deleteClientButtons = document.getElementsByClassName('deleteClientButton');
for (let i = 0; i < deleteClientButtons.length; i++) {
    deleteClientButtons[i].addEventListener('click', deleteClient);
}