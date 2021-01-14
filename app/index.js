const URL = "http://localhost:3000"

function parseJSON(response) {
    return response.json()
}

function fetchFurniture() {
    fetch(URL + `/furniture`)
        .then(parseJSON)
        .then(json => renderItems(json))
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
        li.appendChild(p)
        li.addEventListener("click", fillForm)
    })
}

function fillForm(event) {
    changeColor(event.target)
    const nameInput = document.getElementById("furniture-name")
    const descInput = document.getElementById("furniture-description")
    const priceInput = document.getElementById("furniture-price")
    const [itemName, price] = event.target.innerText.split(" $")
    const description = event.target.childNodes[1].innerText
    const liId = event.target.dataset.furnitureId

    nameInput.value = itemName
    priceInput.value = price
    descInput.value = description

    editForm(liId)
}

function editForm(id) {
    const selectedLi = document.querySelector(`[data-furniture-id='${id}']`)
    const changeForm = document.getElementById("furniture-edit-form")
    const nameInput = document.getElementById("furniture-name")
    const descInput = document.getElementById("furniture-description")
    const priceInput = document.getElementById("furniture-price")

    changeForm.addEventListener("submit", (event) => {
        event.preventDefault()
        selectedLi.innerHTML = `${nameInput.value} $${priceInput.value} <p style="display: none;">${descInput.value}</p>`
    })
}

//Execute functions
fetchFurniture()