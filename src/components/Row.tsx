import { useEffect, useState } from "react";

import { getPokemonData } from "../services/api";

import { Pokemon } from "../types/Types";

type cardProps = {
  name: string;
  index: number;
  color: string;
}

function Row(props: cardProps) {
  const [pokemon, setPokemon] = useState<Pokemon>();
  
  useEffect(() => {
    if(props.name) {
      getPokemonData(props.name)
        .then(response => response.json())
        .then(data => setPokemon(data));
    }
  }, [])

  return (
    <>
      <td className={`${props.color}`}>
        <img className="mx-auto" src={pokemon?.sprites.front_default} alt={pokemon?.name + "photo"} loading="lazy" />
      </td>
      <td className={`text-center font-semibold text-white ${props.color}`}>{pokemon?.name.toUpperCase() || "LOADING"}</td>
      <td className={`text-center font-semibold text-white ${props.color}`}>{pokemon?.id}</td>
      <td className={`text-center font-semibold text-white ${props.color}`}>{pokemon?.height}dm</td>
      <td className={`text-center font-semibold text-white ${props.color}`}>{pokemon?.weight}hg</td>
    </>
  )
}

export default Row