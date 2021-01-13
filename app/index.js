// step one: fetch all furniture
const URL = "http://localhost:3000"
const nameInput = document.getElementById("furniture-name")
const descInput = document.getElementById("furniture-description")
const priceInput = document.getElementById("furniture-price")
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
        const p = document.createElement('p')
        li.innerText = `${element.name} ${element.price} `
        p.innerText = `${element.description}`
        p.style.display = "none"
        li.dataset.furnitureId = element.id
        ul.appendChild(li)
        li.addEventListener("click", fillForm)
    })
}

function fillForm(event){
    debugger
    const [itemName, price] = event.target.innerText
    nameInput.value = itemName
    priceInput.value = price
}

// step three: ???

//Execute functions
fetchFurniture()