// step one: fetch all furniture

function parseJSON(response) {
    return response.json()
}

function fetchFurniture() {
    fetch(`http://localhost:3000/furniture`)
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

// step three: ???

//Execute functions
fetchFurniture()

