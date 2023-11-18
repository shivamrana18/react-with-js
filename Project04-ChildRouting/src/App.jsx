import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Passport from './components/passport';
import Navbar from './components/NavBar';
import Regular from './components/regular';
import Tatkal from './components/tatkal';
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/passport" element={<Passport />}>
          <Route path="/regular" element={<Regular />} />
          <Route path="/tatkal" element={<Tatkal />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
