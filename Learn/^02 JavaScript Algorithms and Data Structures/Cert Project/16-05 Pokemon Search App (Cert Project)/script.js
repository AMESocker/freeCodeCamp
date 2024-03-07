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

// const pokemonAPI = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/';
const pokemonAPI = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/metapod';

const fetchData = async () => {
  try{
    const res = await fetch(pokemonAPI);
    const data = await res.json();
    console.log(data)
  }catch(err){
    console.log(err)
  }
};
let metapodEx =
{
  "base_experience": 72,
  "height": 7,
  "id": 11,
  "name": "metapod",
  "order": 15,
  "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/11.png",
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/11.png",
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/11.png"
  },
  "stats": [
      {
          "base_stat": 50,
          "effort": 0,
          "stat": {
              "name": "hp",
              "url": "https://pokeapi.co/api/v2/stat/1/"
          }
      },
      {
          "base_stat": 20,
          "effort": 0,
          "stat": {
              "name": "attack",
              "url": "https://pokeapi.co/api/v2/stat/2/"
          }
      },
      {
          "base_stat": 55,
          "effort": 2,
          "stat": {
              "name": "defense",
              "url": "https://pokeapi.co/api/v2/stat/3/"
          }
      },
      {
          "base_stat": 25,
          "effort": 0,
          "stat": {
              "name": "special-attack",
              "url": "https://pokeapi.co/api/v2/stat/4/"
          }
      },
      {
          "base_stat": 25,
          "effort": 0,
          "stat": {
              "name": "special-defense",
              "url": "https://pokeapi.co/api/v2/stat/5/"
          }
      },
      {
          "base_stat": 30,
          "effort": 0,
          "stat": {
              "name": "speed",
              "url": "https://pokeapi.co/api/v2/stat/6/"
          }
      }
  ],
  "types": [
      {
          "slot": 1,
          "type": {
              "name": "bug",
              "url": "https://pokeapi.co/api/v2/type/7/"
          }
      }
  ],
  "weight": 99
}
fetchData();
//^----Tests----



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
#pokemon-name, #pokemon-id, #weight,          #height,       #hp, #attack, #defense, #special-attack, #special-defense, and #speed elements should be 
PIKACHU,       #25 or 25,   Weight: 60 or 60, Height: 4 or 4, 35, 55,       40,       50,             50, and               90, respectively

When the #search-input element contains the value 
Pikachu and the #search-button element is clicked, you should add an img element with the id of sprite and the src set to the Pokémon's front_default sprite to the page

When the #search-input element contains the value 
Pikachu and the #search-button element is clicked, the 
#types element should contain a single inner element with the value 
ELECTRIC. The #types element content should be cleared between searches

When the #search-input element contains the value 
94 and the #search-button element is clicked, the values in the #pokemon-name, #pokemon-id, #weight, #height, #hp, #attack, #defense, #special-attack, #special-defense, and #speedelements should be GENGAR, #94 or 94, Weight: 405 or 405, Height: 15 or 15, 60, 65, 60, 130, 75, and 110, respectively

When the #search-input element contains the value 94 and the #search-button element is clicked, you should add an img element with the id of sprite and the src set to the Pokémon's front_default sprite to the page

When the #search-input element contains the value 94 and the #search-button element is clicked, the #types element should contain two inner elements with the text values GHOST and POISON, respectively. The #types element content should be cleared between searches
*/