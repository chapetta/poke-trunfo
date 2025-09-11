import { useEffect, useState } from "react";
import getPokemon from "../api/pokeTrunfoAPI";



export function GameProvider({ children }) {
  const [player, setPlayer] = useState("");
  const [computer, setCumputer] = useState("");
  const [ pokemonList, setPokemonList ] = useState([])


  useEffect(() => {
    async function fetchPokemons() {
      const pokemonData = await getPokemon();
      setPokemonList(pokemonData);
    }
    fetchPokemons();
  }, [])

  return (
    <gameContext.Provider
    value={ {player, setPlayer, computer, setCumputer, pokemonList} }
    >
      {children}
    </gameContext.Provider>
  )
}