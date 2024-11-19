import { useEffect, useState } from "react";

import { getPokemonData } from "../services/api";

import { Pokemon } from "../types/Types";

/**
 * "Row" type
 * 
 * Tipo para "fila"
 */

type rowProps = {
  name: string;
  index: number;
  color: string;
}

/**
 * "Row" component for table
 * 
 * Componente "fila" para tabla
 * @param props Row props / Props de fila
 * @returns "Row" component / Componente "Row"
 */

function Row(props: rowProps) {
  const [pokemon, setPokemon] = useState<Pokemon>();

  /**
   * API fetching and state effect
   * 
   * Efecto para el fetch API y el estado
   */
  
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
        {
          pokemon?.sprites?.front_default &&
          <img className="mx-auto" src={pokemon?.sprites.front_default} alt={pokemon?.name + "photo"} loading="lazy" />
        }
      </td>
      <td className={`text-center font-semibold text-white ${props.color}`}>{pokemon?.name.toUpperCase() || "LOADING"}</td>
      <td className={`text-center font-semibold text-white ${props.color}`}>{pokemon?.id}</td>
      <td className={`text-center font-semibold text-white ${props.color}`}>{pokemon?.height}dm</td>
      <td className={`text-center font-semibold text-white ${props.color}`}>{pokemon?.weight}hg</td>
    </>
  )
}

export default Row