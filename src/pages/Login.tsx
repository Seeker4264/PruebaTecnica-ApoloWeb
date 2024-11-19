import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../services/context";

/**
 * "User" interface to manage properties
 * 
 * Interfaz del "usuario" para manejar sus propiedades
 */

interface User {
  username: string;
  password: string;
};

/**
 * Login and register page
 * 
 * Página de inicio de sesión y registro
 * @returns "Login" page / Página "Login"
 */

function Login() {
  const [users, setUsers] = useState<User[]>([]);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  /**
   * Active session retrieval from localStorage
   * 
   * Obtención de sesión activa desde localStorage
   */

  useEffect(() => {
    if(window.localStorage.getItem("username")?.length !== 0) {
      navigate("/home");
      return;
    }

    const data = window.localStorage.getItem("users") || "[]";
    const parsedData = JSON.parse(data);
    setUsers(parsedData)
  }, [])
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage] = useState("");

  /**
   * User registration function
   * 
   * Función de registro de usuario
   * @param e form event / evento del formulario
   */

  const handleRegister = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const condition = (dt: User) => dt.username.toLowerCase().includes(newUsername.toLowerCase());
    const filtered = users.filter(condition);

    if(newUsername.length < 3) {setNewMessage("Username must be at least 3 characters long")}
    else if(newPassword.length < 8) {setNewMessage("Password must be at least 8 characters long")}
    else if(filtered.length !== 0) {setNewMessage("User already created")}
    else {
      const data = window.localStorage.getItem("users") || "[]";
      const parsedData = JSON.parse(data);

      const payload: User = {
        username: newUsername,
        password: newPassword
      };
      
      parsedData.push(payload);
      setUsers(parsedData);
      window.localStorage.setItem("users", JSON.stringify(parsedData));

      setUser({
        username: newUsername,
        password: newPassword
      });
      
      window.localStorage.setItem("username", user.username);
      window.localStorage.setItem("password", user.password);

      setNewMessage("");
      navigate("/home");
    };
  };

  /**
   * User login function
   * 
   * Función de inicio de sesión del usuario
   * @param e form event / evento del formulario
   */

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const condition = (dt: User) => dt.username.toLowerCase().includes(username.toLowerCase());
    const filtered = users.filter(condition);

    if(username.length < 3) {setMessage("Username must be at least 3 characters long")}
    else if(password.length < 8) {setMessage("Password must be at least 8 characters long")}
    else if(filtered.length === 0) {setMessage("Invalid username or password")}
    else if(filtered[0].password !== password) {setMessage("Invalid username or password")}
    else {
      setUser({
        username: username,
        password: password
      });
      
      window.localStorage.setItem("username", user.username);
      window.localStorage.setItem("password", user.password);

      setMessage("");
      navigate("/home");
    };
  };

  return (
    <>
      <main className="flex flex-row justify-center items-center gap-4 w-screen h-screen">

        <form className="flex flex-col justify-center items-center gap-2 w-[20rem] rounded-2xl border border-[#555] dark:border-[#777] p-6 shadow-lg bg-[#ddd] dark:bg-[#444] [&>label]:mr-auto [&>label]:font-semibold [&>input]:rounded-lg [&>input]:px-2 [&>input]:py-1 [&>input]:w-full [&>input]:outline-none dark:[&>input]:text-[#111]" onSubmit={handleRegister}>
          <h2 className="text-3xl font-bold mb-2">Registrarse</h2>

          <label htmlFor="newUsername">Usuario</label>
          <input id="newUsername" type="text" minLength={3} required onChange={(e) => {setNewUsername(e.target.value)}} onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleRegister(e);
            }
          }} />

          <label htmlFor="newPassword">Contraseña</label>
          <input id="newPassword" type="password" required onChange={(e) => {setNewPassword(e.target.value)}} onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleRegister(e);
            }
          }} />

          <p className="mt-2 text-sm text-[#ff6060]">{newMessage}</p>

          <button className="w-full rounded-2xl px-4 py-2 mt-3 font-semibold text-white bg-[#777] dark:bg-[#555] hover:bg-[#555] dark:hover:bg-[#333]" type="submit">Registrarse</button>
        </form>
        
        <form className="flex flex-col justify-center items-center gap-2 w-[20rem] rounded-2xl border border-[#555] dark:border-[#777] p-6 shadow-lg bg-[#ddd] dark:bg-[#444] [&>label]:mr-auto [&>label]:font-semibold [&>input]:rounded-lg [&>input]:px-2 [&>input]:py-1 [&>input]:w-full [&>input]:outline-none dark:[&>input]:text-[#111]" onSubmit={handleLogin}>
          <h2 className="text-3xl font-bold mb-2">Ingresar</h2>

          <label htmlFor="username">Usuario</label>
          <input id="username" type="text" minLength={3} required onChange={(e) => {setUsername(e.target.value)}} onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleLogin(e);
            }
          }} />

          <label htmlFor="password">Contraseña</label>
          <input id="password" type="password" required onChange={(e) => {setPassword(e.target.value)}} onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleLogin(e);
            }
          }} />

          <p className="mt-2 text-sm text-[#ff6060]">{message}</p>

          <button className="w-full rounded-2xl px-4 py-2 mt-3 font-semibold text-white bg-[#777] dark:bg-[#555] hover:bg-[#555] dark:hover:bg-[#333]" type="submit">Ingresar</button>
        </form>

      </main>
    </>
  )
}

export default Login
