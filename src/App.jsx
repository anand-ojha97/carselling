import React from "react";
import Login from "./buyer-flow/components/Auth/Login";
import Register from "./buyer-flow/components/Auth/Register";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}  />
      </Routes>
    </Router>
  );
};

export default App;
