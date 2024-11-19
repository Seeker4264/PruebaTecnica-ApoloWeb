import { Pokemon } from "../types/Types";

/**
 * "Custom row" type
 * 
 * Tipo para "fila personalizada"
 */

type rowProps = {
  poke: Pokemon;
  index: number;
  color: string;
}

/**
 * "Custom row" component for table
 * 
 * Componente "fila personalizada" para tabla
 * @param props Custom row props / Props de fila personalizada
 * @returns "CustomRow" component / Componente "CustomRow"
 */

function CustomRow(props: rowProps) {
  return (
    <>
      <td className={`text-center font-semibold text-white ${props.color}`}>{props.poke?.name.toUpperCase() || "LOADING"}</td>
      <td className={`text-center font-semibold text-white ${props.color}`}>{props.poke?.height}dm</td>
      <td className={`text-center font-semibold text-white ${props.color}`}>{props.poke?.weight}hg</td>
    </>
  )
}

export default CustomRow