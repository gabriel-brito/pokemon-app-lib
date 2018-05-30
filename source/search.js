export const search = (name) => 
  fetch(`http://pokeapi.co/api/v2/pokemon/${name}`)
    .then(data => data.json())