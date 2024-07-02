import React, { useEffect } from "react";
import Home from "./pages/home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import AllTask from "./pages/AllTask";
import ImportantTask from "./pages/ImportantTask";
import CompletedTask from "./pages/CompletedTask";
import IncompletedTask from "./pages/IncompletedTask";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { useSelector } from "react-redux";

const App = () => {
  // const navigate = useNavigate();
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // useEffect(() => {
  //   if (isLoggedIn === false) {
  //     navigate("/login");
  //   }
  // }, []);

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
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
