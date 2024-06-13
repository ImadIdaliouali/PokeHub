import { POKEAPI_URL } from "../constants";

export const getPokemons = async (limit = 100) => {
  try {
    const response = await fetch(`${POKEAPI_URL}?limit=${limit}`);
    const result = await response.json();
    const pokemons = await Promise.all(
      result.results.map(async (data) => {
        const pokemon = await getPokemon(data.url);
        return pokemon;
      })
    );
    return pokemons;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    return [];
  }
};

export const getPokemon = async (url) => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching Pokémon details:", error);
    return null;
  }
};

export const getArtwork = (pokemon) =>
  pokemon.sprites.other["official-artwork"].front_default;

export const getType = (pokemon) => pokemon.types[0].type.name;
