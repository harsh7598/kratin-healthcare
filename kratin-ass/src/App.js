import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignupForm from "./components/SignupForm";
import SigninForm from "./components/SigninForm";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {
            <Route path="/" element={<NavBar />}/>
          /* <Route path="/" element={<SigninForm />}/>
          <Route path="/SignUp" element={<SignupForm />} />
          <Route path="/dashboard" element={<Dashboard />} /> */
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
