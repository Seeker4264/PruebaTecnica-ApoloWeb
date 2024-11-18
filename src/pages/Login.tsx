import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../services/context";

function Login() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(window.localStorage.getItem("username")?.length !== 0) {
      navigate("/home");
    }
  }, [])
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if(username.length < 3) {setMessage("User must be at least 3 characters long")}
    else if(password.length < 8) {setMessage("Password must be at least 8 characters long")}
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
      <main className="flex flex-row justify-center items-center w-screen h-screen">

        <form className="flex flex-col justify-center items-center gap-2 w-[20rem] rounded-2xl border border-[#555] dark:border-[#777] p-6 shadow-lg bg-[#ddd] dark:bg-[#444] [&>label]:mr-auto [&>label]:font-semibold [&>input]:rounded-lg [&>input]:px-2 [&>input]:py-1 [&>input]:w-full [&>input]:outline-none dark:[&>input]:text-[#111]" onSubmit={handleLogin}>
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
