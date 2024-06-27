import React from "react";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllTask from "./pages/AllTask";
import ImportantTask from "./pages/ImportantTask";
import CompletedTask from "./pages/CompletedTask";
import IncompletedTask from "./pages/IncompletedTask";

const App = () => {
  return (
    <div className="bg-gray-900 text-black p-2 h-screen relative">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route index element={<AllTask />} />
            <Route path="/important" element={<ImportantTask />} />
            <Route path="/complete" element={<CompletedTask />} />
            <Route path="/incomplete" element={<IncompletedTask />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
