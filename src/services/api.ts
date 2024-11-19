
/**
 * API general fetch function
 * 
 * Función de fetching general de la API
 * @returns Pokemon data array / array de datos de Pokemons
 */

export async function getPokemons() {
  const results = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");

  return results;
};

/**
 * API specific fetch function
 * 
 * Función de fetching específico de la API
 * @returns Pokemon data json / json de datos del Pokemon
 */

export async function getPokemonData(name: string) {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);

  return result;
};
