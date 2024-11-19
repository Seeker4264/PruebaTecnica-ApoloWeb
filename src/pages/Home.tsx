import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { getPokemons } from "../services/api";
import Header from "../components/Header";

import { Result } from "../types/Types";
import Row from "../components/Row";

/**
 * Home page
 * 
 * Página principal
 * @returns "Home" page / Página "Home"
 */

function Home() {
  const [results, setResults] = useState<Result[]>([]);
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name') || "";

  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  /**
   * Fetch API and data state effect
   * 
   * Efecto para el fetch API y el estado de los datos
   */
  
  useEffect(() => {
    getPokemons()
      .then(response => response.json())
      .then(data => {
        const condition = (dt: Result) => dt.name.toLowerCase().includes(name.toLowerCase());
        const filtered = data.results.filter(condition);
        setResults(filtered)
      })
  }, []);

  /**
   * Search bar function
   * 
   * Función de la barra de búsqueda
   */

  const handleSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if(!query) {
      navigate(`/home`);
    } else {
      navigate(`/home?name=${query}`);
    }
    navigate(0);
  };

  /**
   * Data delete function
   * 
   * Función de borrado de dato
   * @param name "Pokemon name" for the filter() condition / "Nombre del Pokemon" para la condición de filter()
   */
  
  const handleDelete = (name: string) => {
    const filteredResults = results.filter((result) => result.name !== name);
    setResults(filteredResults);
  };

  return (
    <>
      <Header />
      <main className="flex flex-col justify-start items-center gap-2 min-h-screen">

        <h1 className="text-3xl font-bold mb-4">Lista de Pokemons</h1>

        <section className="flex flex-row justify-center items-center w-1/2">
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
                Sprite
              </th>
              <th>
                Nombre
              </th>
              <th>
                Id
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
                  <Row name={value.name} index={index} color={color} />
                  <td className={`text-center ${color}`}>
                    <div className="flex flex-row justify-center items-center gap-2">
                      <button className="rounded-lg px-2 py-1 text-white bg-[#777] dark:bg-[#666] hover:bg-[#555] dark:hover:bg-[#444]" onClick={() => handleDelete(value.name)}>Borrar</button>
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

export default Home
