import React, { useState } from "react";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";
import { IconButton } from "@material-ui/core";
import { Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
//import { useHistory } from "react-router-dom";
const DoctorAppointment = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. John Doe",
      specialty: "Cardiology",
      qualifications: "MD, PhD",
      availability: "Monday to Friday",
      reviews: [
        { id: 1, rating: 5, comment: "Great doctor!" },
        { id: 2, rating: 4, comment: "Very knowledgeable." },
      ],
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      specialty: "Dermatology",
      qualifications: "MD",
      availability: "Tuesday to Saturday",
      reviews: [
        { id: 3, rating: 4, comment: "Helped me with my skin condition." },
        { id: 4, rating: 3, comment: "Average service." },
      ],
    },
  ]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [appointments, setAppointments] = useState([]);

  const searchDoctors = (specialty, location, availability) => {
  };

  const bookAppointment = () => {
  };

  const sendReminders = () => {
  };

  const leaveReview = (doctorId, rating, review) => {
  };

  const updateMedicalHistory = (medicalHistory) => {
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <h1 style={{ color: "purple" }}>Doctor Appointment</h1>
      </Grid>
      <IconButton
        onClick={() => navigate("/dashboard")}
        style={{ position: "absolute", top: 0, left: 0, margin: "1rem" }}
      >
        <Home />
      </IconButton>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={2}>
          <TextField label="Specialty" variant="outlined" />
        </Grid>
        <Grid item xs={2}>
          <TextField label="Location" variant="outlined" />
        </Grid>
        <Grid item xs={4}>
          <TextField label="Availability" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" style={{ backgroundColor: "purple", color: "white" }} onClick={searchDoctors}>
            Search
          </Button>
        </Grid>
      </Grid>

      <Grid item container spacing={1}>
        {doctors.map((doctor) => (
          <Grid item key={doctor.id} xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <h2 style={{ color: "blue" }}>{doctor.name}</h2>
                <p>{doctor.specialty}</p>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "blue", color: "white" }}
                  onClick={() => setSelectedDoctor(doctor)}
                >
                  Select
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {selectedDoctor && (
        <Grid item>
          <Card>
            <CardContent>
              <h2 style={{ color: "green" }}>Book Appointment</h2>
              <p>Selected Doctor: {selectedDoctor.name}</p>
              <TextField
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                variant="outlined"
              />
              <Button
                variant="contained"
                style={{ backgroundColor: "green", color: "white" }}
                onClick={bookAppointment}
              >
                Book
              </Button>
            </CardContent>
          </Card>
        </Grid>
      )}
      <Grid item container spacing={1}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <h2 style={{ color: "orange" }}>Send Reminders</h2>
              <Button
                variant="contained"
                style={{ backgroundColor: "orange", color: "white" }}
                onClick={sendReminders}
              >
                Send Reminders
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <h2 style={{ color: "red" }}>Medical History</h2>
              <TextField
                multiline
                rows={4}
                label="Enter your medical history"
                variant="outlined"
              />
              <Button
                variant="contained"
                style={{ backgroundColor: "red", color: "white" }}
                onClick={updateMedicalHistory}
              >
                Save
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {selectedDoctor && (
        <Grid item>
          <Card>
            <CardContent>
              <h2 style={{ color: "purple" }}>Doctor Profile</h2>
              <p>Name: {selectedDoctor.name}</p>
              <p>Specialty: {selectedDoctor.specialty}</p>
              <p>Qualifications: {selectedDoctor.qualifications}</p>
              <p>Availability: {selectedDoctor.availability}</p>
              <Button
                variant="contained"
                style={{ backgroundColor: "purple", color: "white" }}
                onClick={() => setSelectedDoctor(null)}
              >
                Back
              </Button>
            </CardContent>
          </Card>
        </Grid>
      )}

      {selectedDoctor && (
        <Grid item>
          <Card>
            <CardContent>
              <h2 style={{ color: "blue" }}>Leave a Review</h2>
              <TextField type="number" label="Rating" variant="outlined" />
              <TextField multiline rows={4} label="Review" variant="outlined" />
              <Button
                variant="contained"
                style={{ backgroundColor: "blue", color: "white" }}
                onClick={() => leaveReview(selectedDoctor.id)}
              >
                Submit
              </Button>
            </CardContent>
          </Card>
        </Grid>
      )}
    </Grid>
  );
};

export default DoctorAppointment;