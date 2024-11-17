
export async function getPokemons() {
  const results = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");

  return results;
};

export async function getPokemonData(url: string) {
  const result = await fetch(url);

  return result;
};