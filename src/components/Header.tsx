import { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { UserContext } from "../services/context";

/**
 * Header/Navbar component
 * 
 * Componente de navegación/cabecera
 * @returns "Header" component / Componente "Header"
 */

function Header() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  /**
   * Active session retrieval from localStorage
   * 
   * Obtención de sesión activa desde localStorage
   */

  useEffect(() => {
    if(window.localStorage.getItem("username")?.length === 0) {
      return navigate("/");
    }
  }, [])

  /**
   * User logout function
   * 
   * Función de cierre de sesión del usuario
   */

  const handleLogout = () => {
    window.localStorage.setItem("username", "");
    window.localStorage.setItem("password", "");
    setUser({
      username: "",
      password: ""
    })
    navigate("/");
  };

  return (
    <header className="flex flex-row justify-between items-center w-full p-4">
        <h2 className="text-2xl font-bold">{window.localStorage.getItem("username")?.toUpperCase()}</h2>
        <Link className="font-semibold hover:text-neutral-400" to={"/home"}>
          Inicio
        </Link>
        <Link className="font-semibold hover:text-neutral-400" to={"/custom"}>
          Lista Personalizada
        </Link>
        <button className="rounded-lg px-2 py-1 text-white bg-[#777] dark:bg-[#555] hover:bg-[#555] dark:hover:bg-[#444]" onClick={handleLogout}>Cerrar Sesión</button>
    </header>
  )
}

export default Header