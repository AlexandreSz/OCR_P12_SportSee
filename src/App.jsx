import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Pages/Home";

import "./App.css";


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header />
      <main>
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      </BrowserRouter>
    </>

  )
}

export default App;