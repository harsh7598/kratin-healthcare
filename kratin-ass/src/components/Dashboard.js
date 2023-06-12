import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import DescriptionIcon from "@mui/icons-material/Description";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventNoteIcon from "@mui/icons-material/EventNote";
import HealingIcon from "@mui/icons-material/Healing";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    color: "#FF4081",
  },
  link: {
    textDecoration: "none",
  },
  card: {
    backgroundColor: "#212121",
  },
  cardContent: {
    color: "#FFFFFF",
  },
});

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.title}>Elderly Care</h1>
      <Grid container spacing={3}>
        {/* <Grid item xs={12} sm={6} md={4}>
          <Link to="/notifications" className={classes.link}>
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.cardContent}
                >
                  All Notifications
                </Typography>
                <NotificationsIcon
                  fontSize="large"
                  className={classes.cardContent}
                />
              </CardContent>
            </Card>
          </Link>
        </Grid> */}
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/medicine-reminder" className={classes.link}>
            <Card
              className={classes.card}
              style={{ backgroundColor: "#424242" }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.cardContent}
                >
                  Daily Medicine Reminder
                </Typography>
                <AlarmOnIcon fontSize="large" className={classes.cardContent} />
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/prescription" className={classes.link}>
            <Card
              className={classes.card}
              style={{ backgroundColor: "#303F9F" }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.cardContent}
                >
                  Prescription
                </Typography>
                <DescriptionIcon
                  fontSize="large"
                  className={classes.cardContent}
                />
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/nearby-doctors" className={classes.link}>
            <Card
              className={classes.card}
              style={{ backgroundColor: "#1976D2" }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.cardContent}
                >
                  Doctors and Pharmacist Nearby
                </Typography>
                <LocationOnIcon
                  fontSize="large"
                  className={classes.cardContent}
                />
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/doctor-appointment" className={classes.link}>
            <Card
              className={classes.card}
              style={{ backgroundColor: "#0D47A1" }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.cardContent}
                >
                  Doctor Appointment
                </Typography>
                <EventNoteIcon
                  fontSize="large"
                  className={classes.cardContent}
                />
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/medical-expertise" className={classes.link}>
            <Card
              className={classes.card}
              style={{ backgroundColor: "#01579B" }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.cardContent}
                >
                  Medical Expertise
                </Typography>
                <HealingIcon fontSize="large" className={classes.cardContent} />
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/daily-exercise" className={classes.link}>
            <Card
              className={classes.card}
              style={{ backgroundColor: "#006064" }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.cardContent}
                >
                  Daily Exercise
                </Typography>
                <DirectionsRunIcon
                  fontSize="large"
                  className={classes.cardContent}
                />
              </CardContent>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;