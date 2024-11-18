
export async function getPokemons() {
  const results = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");

  return results;
};

export async function getPokemonData(name: string) {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);

  return result;
};
