import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignupForm from "./components/SignupForm";
import SigninForm from "./components/SigninForm";
import Notifications from "./pages/Notifications";
import MedicineReminder from "./pages/MedicineReminder";
import Prescription from "./pages/Prescription";
import NearbyDoctors from "./pages/NearbyDoctors";
import DoctorAppointment from "./pages/DoctorAppointment";
import MedicalExpertise from "./pages/MedicalExpertise";
import DailyExercise from "./pages/DailyExercise";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          
          <Route path="/" element={<SigninForm />}/>
          <Route path="/SignUp" element={<SignupForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/medicine-reminder" element={<MedicineReminder />} />
          <Route path="/prescription" element={<Prescription />} />
          <Route path="/nearby-doctors" element={<NearbyDoctors />} />
          <Route path="/doctor-appointment" element={<DoctorAppointment />} />
          <Route path="/medical-expertise" element={<MedicalExpertise />} />
          <Route path="/daily-exercise" element={<DailyExercise />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
