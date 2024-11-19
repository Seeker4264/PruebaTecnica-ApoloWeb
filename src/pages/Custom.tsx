import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Header from "../components/Header";

import { Pokemon } from "../types/Types";
import CustomRow from "../components/CustomRow";

/**
 * Custom listing page
 * 
 * Página de listado personalizado
 * @returns "Custom" page / Página "Custom"
 */

function Custom() {
  const [results, setResults] = useState<Pokemon[]>([]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name') || "";

  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  /**
   * LocalStorage data fetching and state effect
   * 
   * Efecto para el fetch desde localStorage y el estado de los datos
   */

  useEffect(() => {
    const data = window.localStorage.getItem("customData") || "[]";
    const parsedData = JSON.parse(data);
    
    const condition = (dt: Pokemon) => dt.name.toLowerCase().includes(name.toLowerCase());
    const filtered = parsedData.filter(condition);
    setResults(filtered);
  }, []);

  /**
   * Search bar function
   * 
   * Función de la barra de búsqueda
   */

  const handleSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if(!query) {
      navigate(`/custom`);
    } else {
      navigate(`/custom?name=${query}`);
    }
    navigate(0);
  };

  /**
   * Custom data delete function
   * 
   * Función de borrado de los datos personalizados
   * @param name "Pokemon name" for the filter() condition / "Nombre del Pokemon" para la condición de filter()
   */

  const handleDelete = (name: string) => {
    const filteredResults = results.filter((result) => result.name !== name);
    setResults(filteredResults);

    window.localStorage.setItem("customData", JSON.stringify(filteredResults));
  };

  return (
    <>
      <Header />
      <main className="flex flex-col justify-start items-center gap-2 min-h-screen">

        <h1 className="text-3xl font-bold mb-4">Lista de Pokemons creados</h1>

        <section className="flex flex-row justify-center items-center gap-2 w-1/2">
          <Link className="rounded-2xl px-2 py-1 bg-[#777] dark:bg-[#555] hover:bg-[#555] dark:hover:bg-[#444]" to={"/create"}>
            Crear
          </Link>
          <form className="flex gap-2" onSubmit={handleSearch}>
            <input className="rounded-2xl border border-[#333] px-2 py-1 outline-none bg-[#ddd] text-[#111]" type="text" onChange={(e) => {setQuery(e.target.value)}} onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch(e);
            }
          }} />
            <button className="rounded-2xl px-2 py-1 text-white bg-[#777] dark:bg-[#555] hover:bg-[#555] dark:hover:bg-[#444]" type="submit">Buscar</button>
          </form>
        </section>

        <table className="border-separate">
          <thead>
            <tr className="[&>th]:w-[12rem] [&>th]:bg-[#222] [&>th]:p-4 [&>th]:text-white">
              <th>
                Nombre
              </th>
              <th>
                Altura
              </th>
              <th>
                Peso
              </th>
              <th>
                Opciones
              </th>
            </tr>
          </thead>
          <tbody>
          {
            results.map((value, index) => {
              let color = "bg-neutral-600";
              if(index % 2 !== 0) color = "bg-neutral-700";

              return (
                  <tr key={value.name} className="h-[7rem]">
                    <CustomRow poke={value} index={index} color={color} />
                    <td className={`text-center ${color}`}>
                      <div className="flex flex-row justify-center items-center gap-2">
                        <button className="rounded-lg px-2 py-1 text-white bg-[#777] dark:bg-[#666] hover:bg-[#555] dark:hover:bg-[#444]" onClick={() => handleDelete(value.name)}>Borrar</button>
                        <button className="rounded-lg px-2 py-1 text-white bg-[#777] dark:bg-[#666] hover:bg-[#555] dark:hover:bg-[#444]" onClick={() => navigate(`/edit/${value.name.toLowerCase()}`)}>Editar</button>
                      </div>
                    </td>
                  </tr>
              );
            })
          }
          </tbody>
        </table>

      </main>
    </>
  )
}

export default Custom