import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import DescriptionIcon from '@mui/icons-material/Description';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventNoteIcon from '@mui/icons-material/EventNote';
import HealingIcon from '@mui/icons-material/Healing';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

const Dashboard = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#FF4081' }}>Elderly Care </h1>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ backgroundColor: '#F8BBD0' }}>
            <CardContent>
              <Typography variant="h5" component="h2" style={{ color: '#FFFFFF' }}>
                All Notifications
              </Typography>
              <NotificationsIcon fontSize="large" style={{ color: '#FFFFFF' }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ backgroundColor: '#E1BEE7' }}>
            <CardContent>
              <Typography variant="h5" component="h2" style={{ color: '#FFFFFF' }}>
                Daily Medicine Reminder
              </Typography>
              <AlarmOnIcon fontSize="large" style={{ color: '#FFFFFF' }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ backgroundColor: '#D1C4E9' }}>
            <CardContent>
              <Typography variant="h5" component="h2" style={{ color: '#FFFFFF' }}>
                Prescription
              </Typography>
              <DescriptionIcon fontSize="large" style={{ color: '#FFFFFF' }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ backgroundColor: '#C5CAE9' }}>
            <CardContent>
              <Typography variant="h5" component="h2" style={{ color: '#FFFFFF' }}>
                Doctors and Pharmacist Nearby
              </Typography>
              <LocationOnIcon fontSize="large" style={{ color: '#FFFFFF' }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ backgroundColor: '#BBDEFB' }}>
            <CardContent>
              <Typography variant="h5" component="h2" style={{ color: '#FFFFFF' }}>
                Doctor Appointment
              </Typography>
              <EventNoteIcon fontSize="large" style={{ color: '#FFFFFF' }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ backgroundColor: '#B3E5FC' }}>
            <CardContent>
              <Typography variant="h5" component="h2" style={{ color: '#FFFFFF' }}>
                Medical Expertise
              </Typography>
              <HealingIcon fontSize="large" style={{ color: '#FFFFFF' }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ backgroundColor: '#B2EBF2' }}>
            <CardContent>
              <Typography variant="h5" component="h2" style={{ color: '#FFFFFF' }}>
                Daily Exercise
              </Typography>
              <DirectionsRunIcon fontSize="large" style={{ color: '#FFFFFF' }} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
