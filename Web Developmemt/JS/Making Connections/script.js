


function addInput(aTag, pTag){
    aTag = document.getElementById(aTag)
    pTag = document.getElementById(pTag)

    aTag.remove()
    pTag.innerHTML = `
    <div>
        <input type="text" id="nameInput" placeholder="Enter new name"/>
        <button onclick="changeName('nameInput')">Save</button>
        <a onclick="window.location.reload()">Reset</a>
    </div>
    `
    
}


function changeName(idOfInput){
    newName = document.getElementById(idOfInput).value
    fullName.innerText = newName
}


function acceptRequest(element){
    person = document.getElementById(element)

    requestTag = document.getElementById('requestNr') 
    requestTag.innerText = parseInt(requestTag.innerText) - 1

    myConnections = document.getElementById('allConnections') 
    myConnections.innerText = parseInt(myConnections.innerText) + 1

    person.remove()

}

function declineRequest(element){
    person = document.getElementById(element)

    requestTag = document.getElementById('requestNr') 
    requestTag.innerText = parseInt(requestTag.innerText) - 1

    person.remove()

}