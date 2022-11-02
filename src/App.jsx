import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import User from "./Pages/User";

import "./App.css";


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header />
      <main>
        <Sidebar />

        <Routes>
        <Route path="/" element={<User />} />
          <Route path="/user/:id" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      </BrowserRouter>
    </>

  )
}

export default App;