// step one: fetch all furniture
const URL = "http://localhost:3000"
const nameInput = document.querySelectorAll("input")[0]
const descInput = document.querySelectorAll("input")[1]
const priceInput = document.querySelectorAll("input")[2]
const editForm = document.querySelector("#furniture-edit-form")

function parseJSON(response) {
    return response.json()
}

function fetchFurniture() {
    fetch(URL + `/furniture`)
        .then(parseJSON)
        .then(json => renderItems(json))
}

// step two: add all furniture to the ul
function renderItems(items) {
    const ul = document.querySelector('ul')
    items.forEach(element => {
        const li = document.createElement('li')
        li.innerText = `${element.name} ${element.price}`
        ul.appendChild(li)
    })
}

function fillForm(data){

}

// step three: ???

//Execute functions
fetchFurniture()