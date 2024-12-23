import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../components/Header";

import { Pokemon } from "../types/Types";

/**
 * Edit custom Pokemon page
 * 
 * Página para editar un Pokemon personalizado
 * @returns "Edit" page / Página "Edit"
 */

function Edit() {
  const { pokemon } = useParams();

  const [name, setName] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  /**
   * Custom data update function
   * 
   * Función de actualización de datos personalizados
   * @param e form event / evento del formulario
   */

  const handleUpdate = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if(name.length < 3) {setMessage("Name must be at least 3 characters long")}
    else if(height < 0) {setMessage("Height must have a value greater or equal to 0")}
    else if(weight < 0) {setMessage("Weight must have a value greater or equal to 0")}
    else {
      const data = window.localStorage.getItem("customData") || "[]";
      const parsedData = JSON.parse(data);
      
      const payload: Pokemon = {
        name,
        height,
        weight
      };

      for (let index = 0; index < parsedData.length; index++) {
        if(parsedData[index].name.toLowerCase() === pokemon?.toLowerCase()) {
          parsedData[index] = payload;
        };
      };
      
      window.localStorage.setItem("customData", JSON.stringify(parsedData));

      setMessage("");
      navigate("/custom");
    };
  };

  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center gap-2 h-[32rem]">

      <h1 className="text-3xl font-bold mb-4">Editar</h1>

        <form className="flex flex-col justify-center items-center gap-3 w-[20rem] rounded-2xl border border-[#555] dark:border-[#777] p-6 shadow-lg bg-[#ddd] dark:bg-[#444] [&>label]:mr-auto [&>label]:font-semibold [&>input]:rounded-lg [&>input]:px-2 [&>input]:py-1 [&>input]:w-full [&>input]:outline-none dark:[&>input]:text-[#111]" onSubmit={handleUpdate}>
          <label htmlFor="name">Nombre</label>
          <input id="name" type="text" minLength={3} required onChange={(e) => {setName(e.target.value)}} onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleUpdate(e);
            }
          }} />

          <label htmlFor="height">Altura</label>
          <input id="height" type="number" min={0} required onChange={(e) => {setHeight(Number(e.target.value))}} onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleUpdate(e);
            }
          }} />

          <label htmlFor="weight">Peso</label>
          <input id="weight" type="number" min={0} required onChange={(e) => {setWeight(Number(e.target.value))}} onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleUpdate(e);
            }
          }} />

          <p className="mt-2 text-sm text-[#ff6060]">{message}</p>

          <button className="w-full rounded-2xl px-4 py-2 mt-3 font-semibold text-white bg-[#777] dark:bg-[#555] hover:bg-[#555] dark:hover:bg-[#333]" type="submit">Actualizar</button>
        </form>
        
      </main>
    </>
  )
}

export default Edit
