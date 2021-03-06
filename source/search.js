const searchByName = name => 
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(data => data.json())

const searchByType = type => 
  fetch(`https://pokeapi.co/api/v2/type/${type}`)
    .then(data => data.json())

const searchByAbility = ability => 
  fetch(`https://pokeapi.co/api/v2/ability/${ability}`)
    .then(data => data.json())


export {
  searchByName,
  searchByType,
  searchByAbility
}