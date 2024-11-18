import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext, User } from "./services/context";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Custom from "./pages/Custom";
import EditCreate from "./pages/EditCreate";

function App() {
  const [user, setUser] = useState<User>({
    username: "",
    password: ""
  })

  if(!window.localStorage.getItem("username")) {
    window.localStorage.setItem("username", user.username);
  };

  if(!window.localStorage.getItem("password")) {
    window.localStorage.setItem("password", user.password);
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
            <Route path="/editcreate" element={<EditCreate />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
