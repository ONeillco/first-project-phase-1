
//Pikachu's Card
const card = document.querySelector('.pikacolor')
const info = document.querySelector('.pikaspeak')

//This line below works lets see if we can add an animation
// card.addEventListener('click', function(){pokedex.style.background = 'lightblue'})
card.addEventListener('mouseover', function () { card.style.background = 'yellow' })
card.addEventListener('mouseleave', function () { card.style.background = 'white' })
info.addEventListener('click', changeText1)

function changeText1() {
    info.textContent = "Pikachu's can generate powerful electricity they have cheek sacs that are extra soft and super stretchy."

}


const getPokemon = () => {
    // for(let i = 1; i < 151; i++){
    // fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            const pikachu = {
                name: data.name,
                // image: data.sprites['front_default'],
                height: data.height,
                weight: data.weight,
                type: data.types.map((type) => type.type.name).join(', ')
            }
            pokeBall(pikachu)

        })

    // }
    const pokeBall = pikachu => {

        console.log(pikachu);
        const ul = document.getElementById('pokedex')
        const li = document.createElement('li')
        const name = document.createElement('h4')
        // const image = document.createElement('img');
        const type = document.createElement('p')
        const height = document.createElement('p')
        const weight = document.createElement('p')

        name.innerText = 'Pokemon name ' + `${pikachu.name[0]}`.toUpperCase() + 'pikachu'.slice(1)
        // image.src = `Image: ${pikachu.image}`
        type.innerText = `Type: ${pikachu.type}`
        height.innerText = `Height: ${pikachu.height}`
        weight.innerText = `Weight: ${pikachu.weight}`

        li.appendChild(name)
        // li.appendChild(image)
        li.appendChild(type)
        li.appendChild(height)
        li.appendChild(weight)

        ul.appendChild(li)


    }
}
//End of Pikachu's Card



//Bulbasaur's Card
const bulbacard = document.querySelector('.bulbacolor')
const bulbainfo = document.querySelector('.pokemon1')

//This line below works lets see if we can add an animation
// card.addEventListener('click', function(){pokedex.style.background = 'lightblue'})
bulbacard.addEventListener('mouseover', function () { bulbacard.style.background = 'green' })
bulbacard.addEventListener('mouseleave', function () { bulbacard.style.background = 'white' })
bulbainfo.addEventListener('click', changeText2)



function changeText2() {
    bulbainfo.textContent = "There is a plant seed on Bulbasaur's back right from the day this Pokémon is born. The seed slowly grows larger."
}

const getPokemon1 = () => {

    fetch(`https://pokeapi.co/api/v2/pokemon/1`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            const bulbasaur = {
                name: data.name,
                // image: data.sprites['front_default'],
                height: data.height,
                weight: data.weight,
                type: data.types.map((type) => type.type.name).join(', ')
            }
            pokeBall(bulbasaur)
        })


    const pokeBall = bulbasaur => {

        console.log(bulbasaur);
        const ul = document.getElementById('pokedex1')
        const li = document.createElement('li')
        const name = document.createElement('h4')
        // const image = document.createElement('img');
        const type = document.createElement('p')
        const height = document.createElement('p')
        const weight = document.createElement('p')

        name.innerText = `Name: ${bulbasaur.name}`
        // image.src = `Image: ${bulbasaur.image}`
        type.innerText = `Type: ${bulbasaur.type}`
        height.innerText = `Height: ${bulbasaur.height}`
        weight.innerText = `Weight: ${bulbasaur.weight}`

        li.appendChild(name)
        // li.appendChild(image)
        li.appendChild(type)
        li.appendChild(height)
        li.appendChild(weight)

        ul.appendChild(li)


    }

}
//End of Bulbasaur's Card





//Charmander's Card
const charcard = document.querySelector('.charcolor')
const charinfo = document.querySelector('.pokemon2')

//This line below works lets see if we can add an animation
// card.addEventListener('click', function(){pokedex.style.background = 'lightblue'})
charcard.addEventListener('mouseover', function () { charcard.style.background = 'red' })
charcard.addEventListener('mouseleave', function () { charcard.style.background = 'white' })
charinfo.addEventListener('click', changeText3)



function changeText3() {
    charinfo.textContent = "Charmander's has a preference for hot things. When it rains, steam is said to spout from the tip of its tail."
}


const getPokemon2 = () => {

    fetch(`https://pokeapi.co/api/v2/pokemon/4`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            const charmander = {
                name: data.name,
                // image: data.sprites['front_default'],
                height: data.height,
                weight: data.weight,
                type: data.types.map((type) => type.type.name).join(', ')
            }
            pokeBall(charmander)
        })



    const pokeBall = charmander => {

        console.log(charmander);
        const ul = document.getElementById('pokedex2')
        const li = document.createElement('li')
        const name = document.createElement('h4')
        const type = document.createElement('p')
        const height = document.createElement('p')
        const weight = document.createElement('p')

        name.innerText = `Name: ${charmander.name}`
        // image.src = `Image: ${charmander.image}`
        type.innerText = `Type: ${charmander.type}`
        height.innerText = `Height: ${charmander.height}`
        weight.innerText = `Weight: ${charmander.weight}`

        li.appendChild(name)
        // li.appendChild(image)
        li.appendChild(type)
        li.appendChild(height)
        li.appendChild(weight)

        ul.appendChild(li)

    }
}
//End of Charmander's Card


//Squirtle's Card
const squirtlecard = document.querySelector('.squirtlecolor')
const squirtleinfo = document.querySelector('.pokemon3')

//This line below works lets see if we can add an animation
// card.addEventListener('click', function(){pokedex.style.background = 'lightblue'})
squirtlecard.addEventListener('mouseover', function () { squirtlecard.style.background = 'blue' })
squirtlecard.addEventListener('mouseleave', function () { squirtlecard.style.background = 'white' })
squirtleinfo.addEventListener('click', changeText4)



function changeText4() {
    squirtleinfo.textContent = "When Squirtles retract their long necks into its shell, it squirts out water with vigorous force."
}


const getPokemon3 = () => {

    fetch(`https://pokeapi.co/api/v2/pokemon/7`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            const squirtle = {
                name: data.name,
                // image: data.sprites['front_default'],
                height: data.height,
                weight: data.weight,
                type: data.types.map((type) => type.type.name).join(', ')
            }
            pokeBall(squirtle)
        })

    const pokeBall = squirtle => {

        console.log(squirtle);
        const ul = document.getElementById('pokedex3')
        const li = document.createElement('li')
        const name = document.createElement('h4')
        // const image = document.createElement('img');
        const type = document.createElement('p')
        const height = document.createElement('p')
        const weight = document.createElement('p')

        name.innerText = `Name: ${squirtle.name}`
        // image.src = `Image: ${squirtle.image}`
        type.innerText = `Type: ${squirtle.type}`
        height.innerText = `Height: ${squirtle.height}`
        weight.innerText = `Weight: ${squirtle.weight}`

        li.appendChild(name)
        // li.appendChild(image)
        li.appendChild(type)
        li.appendChild(height)
        li.appendChild(weight)

        ul.appendChild(li)


    }
}
//End of Squirtle's Card



getPokemon()
getPokemon1()
getPokemon2()
getPokemon3()

