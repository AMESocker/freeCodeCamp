const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const img = document.getElementById('img')

// const pokemonAPI = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/';
const cleanData = (input) => {
  let pokLower = input.toLowerCase()
  const pokemonAPI = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokLower}`;
  // console.log(pokLower, pokemonAPI)
  fetchData(pokemonAPI)
}
const fetchData = async (pokemon) => {
  try{
    const res = await fetch(pokemon);
    const data = await res.json();
        console.log('Yes')
        displayData(data)

    }catch(err){
      alert('Pokémon not found')
    // console.log(err)
    // displayData(err)
  }
};

const displayData = (data) => {
 
    console.log(data)
pokemonName.textContent += data.name.toUpperCase()
pokemonId.textContent +=   data.id
weight.textContent += data.weight
height.textContent += data.height
hp.textContent += data.stats[0].base_stat
attack.textContent += data.stats[1].base_stat
defense.textContent += data.stats[2].base_stat
specialAttack.textContent += data.stats[3].base_stat
specialDefense.textContent += data.stats[4].base_stat
speed.textContent += data.stats[5].base_stat

let dataSprite = data.sprites.front_default
img.innerHTML += `
<img id='sprite' src=${dataSprite}>`
let dataType = data.types[0].type.name.toUpperCase()

types.innerHTML +=
`<div>${dataType}</div>
`
if(data.types[1]){
    let dataType1 = data.types[1].type.name.toUpperCase()
    types.innerHTML +=
`
<div>${dataType1}</div>
`
}
  
}

searchButton.addEventListener('click',()=>{
    let elements = [
        pokemonName,
        pokemonId,
        weight,
        height,
        hp,
        attack,
        defense,
        specialAttack,
        specialDefense,
        speed,
    ]
for (let i = 0; i < elements.length; i++) {
    elements[i].textContent = ''
}
types.innerHTML =''
img.innerHTML = ''
    cleanData(searchInput.value)
})

//^----Tests----
const tests = [
//   'Red',
//   'Pikachu',
//   '94'
]
for(let i = 0;i<tests.length;i++){
  cleanData(tests[i])
}

/*PokéAPI Proxy
Usage
Use the endpoint https://pokeapi-proxy.freecodecamp.rocks/api/pokemon to see a list of all valid Pokémon names, id numbers, and URLs.

Use the endpoint https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/{name-or-id} to get data for a Pokémon, where {name-or-id} is the Pokémon's name or id number.

Note: Pokémon names should be in lowercase, have special characters removed, and be dash separated. Also, if the Pokémon has either ♀ or ♂ as part of its name, the format is {name-f} or {name-m}, respectively.

Example Requests
Click any of the example requests below to see its response.

All valid Pokémon:
https://pokeapi-proxy.freecodecamp.rocks/api/pokemon
Pikachu:
https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/pikachu
https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/25
Nidoran♀:
https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/nidoran-f
https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/29
Mr. Mime:
https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/mr-mime
https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/122
*/

/*
When the 
#search-input element contains the value 
Red and the #search-button element is clicked, an 
alert should appear with the text Pokémon not found

When the 
#search-input element contains the value 
Pikachu and the #search-button element is clicked, the values in the 
#pokemon-name,    PIKACHU,
#pokemon-id,      #25 or 25
#weight,          Weight: 60 or 60     
#height,          Height: 4 or 4
#hp,              35
#attack,          55
#defense,         40
#special-attack,  50 
#special-defense, 50 
#speed,           90
elements should be 


When the #search-input element contains the value 
Pikachu and the #search-button element is clicked, you should add an img element with the id of sprite and the src set to the Pokémon's front_default sprite to the page

When the #search-input element contains the value 
Pikachu and the #search-button element is clicked, the 
#types element should contain a single inner element with the value 
ELECTRIC. The #types element content should be cleared between searches

When the #search-input element contains the value 
94 and the #search-button element is clicked, the values in the #pokemon-name, #pokemon-id, #weight, #height, #hp, #attack, #defense, #special-attack, #special-defense, and #speedelements should be GENGAR, #94 or 94, Weight: 405 or 405, Height: 15 or 15, 60, 65, 60, 130, 75, and 110, respectively

When the #search-input element contains the value 
94 and the #search-button element is clicked, you should add an img element with the id of sprite and the src set to the Pokémon's front_default sprite to the page

When the #search-input element contains the value 
94 and the #search-button element is clicked, the #types element should contain two inner elements with the text values GHOST and POISON, respectively. The #types element content should be cleared between searches
*/