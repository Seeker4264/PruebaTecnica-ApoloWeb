import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getPokemons } from "../services/api";

import { Result } from "../types/Types";
import Card from "../components/Row";

function Home() {
  const [results, setResults] = useState<Result[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    if(window.localStorage.getItem("username")?.length === 0) {
      return navigate("/");
    }

    getPokemons()
      .then(response => response.json())
      .then(data => setResults(data.results));
  }, [])

  const handleLogout = () => {
    window.localStorage.setItem("username", "");
    window.localStorage.setItem("password", "");
    navigate("/");
  };

  return (
    <>
      <header className="flex flex-row justify-end items-center w-full p-4">
        <button className="rounded-lg px-2 py-1 bg-[#777] dark:bg-[#555] hover:bg-[#555] dark:hover:bg-[#444]" onClick={handleLogout}>Logout</button>
      </header>
      <main className="flex flex-col justify-center items-center min-h-screen">

        <table className="border-separate">
          <thead>
            <tr className="[&>th]:w-[12rem] [&>th]:bg-[#222] [&>th]:p-4">
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
            </tr>
          </thead>
          <tbody>
          {
            results.map((value, index) => {
              return (
                <tr key={index} className="h-[7rem]">
                  <Card name={value.name} index={index} />
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
