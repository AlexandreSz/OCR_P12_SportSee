import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import DailyActivity from "./Components/DailyActivity/DailyActivity";
import Home from "./Pages/Home";


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header />
      <main>
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      </BrowserRouter>
    </>

  )
}

export default App;