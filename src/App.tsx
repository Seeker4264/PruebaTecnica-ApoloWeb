import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext, User } from "./services/context";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Custom from "./pages/Custom";
import Create from "./pages/Create";
import Edit from "./pages/Edit";

/**
 * React Router logic
 * 
 * Lógica de React Router
 * @returns "App" component (router logic) / Componente "App" (lógica del enrutador)
 */

function App() {
  const [user, setUser] = useState<User>({
    username: "",
    password: ""
  })

  /**
   * Initialization of localStorage states (in case of being missing)
   * 
   * Inicialización de los estados en localStorage (en caso de no ser encontrados)
   */

  if(!window.localStorage.getItem("username")) {
    window.localStorage.setItem("username", user.username);
  };

  if(!window.localStorage.getItem("password")) {
    window.localStorage.setItem("password", user.password);
  };

  if(!window.localStorage.getItem("users")) {
    window.localStorage.setItem("users", "[]");
  };

  if(!window.localStorage.getItem("customData")) {
    window.localStorage.setItem("customData", "[]");
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/custom" element={<Custom />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:pokemon" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
