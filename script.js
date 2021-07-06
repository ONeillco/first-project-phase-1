
const card = document.querySelector('.pikacolor')
const info = document.querySelector('.pikaspeak')
const info1 = document.querySelector('.bulbspeak')
const info2 = document.querySelector('.charspeak')
const info3 = document.querySelector('.squispeak')



card.addEventListener('mouseover', function () { card.style.background = 'yellow' })
card.addEventListener('mouseleave', function () { card.style.background = 'white' })
info.addEventListener('click', function () { info.textContent = "Pikachu's can generate powerful electricity they have cheek sacs that are extra soft and super stretchy." })
info1.addEventListener('click', function () { info1.textContent = "There is a plant seed on Bulbasaur's back right from the day this Pokémon is born. The seed slowly grows larger." })
info2.addEventListener('click', function () { info2.textContent = "Charmander's has a preference for hot things. When it rains, steam is said to spout from the tip of its tail." })
info3.addEventListener('click', function () { info3.textContent = "After birth, its back swells and hardens into a shell, and can powerfully spray water from its mouth" })

// function changeText1() {
//     info.textContent = "Pikachu's can generate powerful electricity they have cheek sacs that are extra soft and super stretchy."

// }

const url = 'https://pokeapi.co/api/v2/pokemon/'

const getPokemon = (pokemon) => {

    fetch(url + pokemon)
        .then(resp => resp.json())
        .then(data => {
            // console.log(data);

            const pikachu = {
                name: data.name,
                height: data.height,
                weight: data.weight,
                type: data.types.map((type) => type.type.name).join(', ')

            }
            pokeBall(pikachu)

        })



    const pokeBall = pikachu => {

        // console.log(pikachu);

        const ul = document.getElementById('pokedex')
        const li = document.createElement('li')

        const name = document.createElement('h4')
        const type = document.createElement('p')
        const height = document.createElement('p')
        const weight = document.createElement('p')

        name.innerText = `Pokemon name ${pikachu.name}`
        type.innerText = `Type: ${pikachu.type}`
        height.innerText = `Height: ${pikachu.height}`
        weight.innerText = `Weight: ${pikachu.weight}`


        li.appendChild(name)
        li.appendChild(type)
        li.appendChild(height)
        li.appendChild(weight)

        ul.appendChild(li)


    }
}

document.addEventListener('DOMContentLoaded', function () {

    getPokemon('pikachu')
    getPokemon('bulbasaur')
    getPokemon('charmander')
    getPokemon('squirtle')
})