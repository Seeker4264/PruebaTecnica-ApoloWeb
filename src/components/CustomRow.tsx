import { Pokemon } from "../types/Types";

type cardProps = {
  poke: Pokemon;
  index: number;
  color: string;
}

function CustomRow(props: cardProps) {
  return (
    <>
      <td className={`text-center font-semibold text-white ${props.color}`}>{props.poke?.name.toUpperCase() || "LOADING"}</td>
      <td className={`text-center font-semibold text-white ${props.color}`}>{props.poke?.height}dm</td>
      <td className={`text-center font-semibold text-white ${props.color}`}>{props.poke?.weight}hg</td>
    </>
  )
}

export default CustomRow