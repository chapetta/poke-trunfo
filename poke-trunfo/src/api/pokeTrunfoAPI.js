const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=151";


export default async function getPokemon() {
  
  const response = await fetch(BASE_URL);
  const data = await response.json();
  const pokemonList = data.results;

  return pokemonList;
}
