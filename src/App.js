import React from "react";
import { Navbar } from "./component/index";
import { Route, Routes } from "react-router-dom";
import { Home, SearchData, NotFound } from "./pages/index";
import useRefreshToken from "./hook/useRefreshToken";
import { useState } from "react";

const App = () => {
  const { dataUsers, refreshToken, loadingLogin } = useRefreshToken();
  const [activeRegisOrLogin, setActiveRegisOrLogin] = useState(false);

  console.log(dataUsers)

  return (
    <div>
      <Navbar
        refreshToken={refreshToken}
        dataUsers={dataUsers}
        loadingLogin={loadingLogin}
        activeRegisOrLogin={activeRegisOrLogin}
        setActiveRegisOrLogin={setActiveRegisOrLogin}
      />
      <Routes>
        <Route path="/" element={<Home dataUsers={dataUsers} setActiveRegisOrLogin={setActiveRegisOrLogin} />} />
        <Route path="/cari/:search" element={<SearchData dataUsers={dataUsers} setActiveRegisOrLogin={setActiveRegisOrLogin} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
