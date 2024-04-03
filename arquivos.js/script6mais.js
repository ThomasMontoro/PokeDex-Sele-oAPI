
const pokeContainer = document.querySelector("#pokeContainer");
const colors = {
    fire: '#ff94a2',
    grass: '#DEFDE0',
    electric: '#ebf3a0',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#bf9780',
    fairy: '#f3a8c2',
    poison: '#DDA0DD',
    bug: '#9bfae0',
    dragon: '#97b3e6',
    psychic: '#f6d1de',
    flying: '#F5F5F5',
    fighting: '#ff9688',
    normal: '#F5F5F5',
    ghost: '#d3bcf6',
    steel: '#DCDCDC',
    ice: '#F0FFFF',
    dark: '#a2a0a1'
};
const mainTypes = Object.keys(colors);

const getPokemons = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const resp = await fetch(url);
    const data = await resp.json();
    createPokemonCard(data);
};

const createPokemonCard = (poke) => {
    const card = document.createElement('div');
    card.classList.add("pokemon");

    const name = (poke.name ?? "").toString()[0].toUpperCase() + (poke.name ?? "").toString().slice(1);
    const id = poke.id.toString().padStart(3, '0');

    const pokeTypes = poke.types.map(type => type.type.name);
    const type = mainTypes.find(type => pokeTypes.indexOf(type) > -1);
    const color = colors[type];

    card.style.backgroundColor = color;

    const pokemonInnerHTML = `
   
    <div class="imgContainer"> 
         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png" alt="${name}">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span></small>
      
    </div>
    `;

    card.innerHTML = pokemonInnerHTML;
    pokeContainer.appendChild(card);
};



