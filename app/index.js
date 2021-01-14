const URL = "http://localhost:3000"

const editForm = document.querySelector("#furniture-edit-form")

function parseJSON(response) {
    return response.json()
}

function fetchFurniture() {
    fetch(URL + `/furniture`)
        .then(parseJSON)
        .then(json => renderItems(json))
}

function renderItems(items) {
    const ul = document.querySelector('ul')
    items.forEach(element => {
        const li = document.createElement('li')
        const p = document.createElement('p')
        li.innerText = `${element.name} $${element.price}`
        p.innerText = `${element.description}`
        p.style.display = "none"
        li.dataset.furnitureId = element.id
        ul.appendChild(li)
        li.addEventListener("click", fillForm)
    })
}

function fillForm(event) {
    changeColor(event.target)
    const nameInput = document.getElementById("furniture-name")
   const descInput = document.getElementById("furniture-description")
    const priceInput = document.getElementById("furniture-price")
    const [itemName, price] = event.target.innerText.split(" $")
    nameInput.value = itemName
    priceInput.value = price
    console.log(descInput.value)
}

function changeColor(li) {
    clearColor()
    li.style.background = "orange"
}

function clearColor() {
    const lis = getLis()
    for (li of lis) {
        li.style.background = ""
    }
}

function getLis() {
    return document.querySelectorAll("li")
}

//Execute functions
fetchFurniture()