import { useEffect, useState } from "react";

import { getPokemonData } from "../services/api";

import { Pokemon } from "../types/Types";

type cardProps = {
  name: string;
  index: number;
}

function Card(props: cardProps) {
  const [pokemon, setPokemon] = useState<Pokemon>();

  let color = "444";
  console.log(props.index)
  if(props.index % 2 !== 0) color = "555";
  
  useEffect(() => {
    if(props.name) {
      getPokemonData(props.name)
        .then(response => response.json())
        .then(data => setPokemon(data));
    }
  }, [])

  return (
    <>
      <td className={`flex justify-center items-center h-[7rem] bg-[#${color}]`}>
        <img src={pokemon?.sprites.front_default} alt={pokemon?.name + "photo"} loading="lazy" />
      </td>
      <td className={`text-center font-semibold bg-[#${color}]`}>{pokemon?.name.toUpperCase() || "LOADING"}</td>
      <td className={`text-center font-semibold bg-[#${color}]`}>{pokemon?.id}</td>
      <td className={`text-center font-semibold bg-[#${color}]`}>{pokemon?.height}dm</td>
      <td className={`text-center font-semibold bg-[#${color}]`}>{pokemon?.weight}hg</td>
    </>
  )
}

export default Card