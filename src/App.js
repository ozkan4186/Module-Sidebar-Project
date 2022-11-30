import React from "react";

import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Documents from "./pages/Documents";
import Sidebar from "./Sidebar";
import Modal from "./Modal";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Sidebar/> */}
        <Routes>
          <Route path="/" element={<Sidebar />} />
          <Route path="/modal" element={<Modal />} />

          <Route path="calendar" element={<Calendar />} />
          <Route path="team" element={<Team />} />
          <Route path="projects" element={<Projects />} />
          <Route path="documents" element={<Documents />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
