import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  
  useEffect(() => {
    if(window.localStorage.getItem("username")?.length === 0) {
      navigate("/");
    }
  }, [])

  const handleLogout = () => {
    window.localStorage.setItem("username", "");
    window.localStorage.setItem("password", "");
    navigate("/");
  };

  return (
    <>
      <main className="flex flex-col justify-center items-center w-screen h-screen">
        <h1 className="text-xl font-bold text-white">Hello World!</h1>
        <button onClick={handleLogout}>Logout</button>
      </main>
    </>
  )
}

export default Home
