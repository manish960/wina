import React from "react";
import Hello from "./component/Hello";
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from "./component/NavBar";

function App() {

  return (
    <>
    <NavBar/>
      <Routes>


        <Route path="/hello" element={<><Hello name="manish" />
          <Hello name="bruce" />
          <Hello name="lianakkk" /></>} />
      </Routes>



    </>
  );
}

export default App;
