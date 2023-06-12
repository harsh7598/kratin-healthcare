import React, { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  FormControlLabel,
  TextField,
  Checkbox,
  Badge,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NotificationsIcon from "@material-ui/icons/Notifications";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import AddIcon from "@material-ui/icons/Add";
import {
  AddCircleOutline,
  CheckCircleOutline,
  Delete,
  HeartBroken,
  Home,
  Snooze,
} from "@mui/icons-material";
import {
  CheckRounded,
  Notifications,
} from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
//import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  title: {
    color: "#f12711",
  },
  card: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  formControl: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  selectLabel: {
    color: theme.palette.text.secondary,
  },
  select: {
    width: "100%",
  },
  addButton: {
    marginTop: theme.spacing(2),
  },
  header: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  addTimeSlot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
  },
  sunIcon: {
    fontSize: 48,
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  plusIcon: {
    fontSize: 48,
    color: theme.palette.primary.main,
  },
}));

const MedicineReminder = () => {
  const classes = useStyles();
  const navigate = useNavigate(); 
  const [medicine, setMedicine] = useState("");
  const [timing, setTiming] = useState("");
  const [medicineName, setMedicineName] = useState("");
  const [daily, setDaily] = useState(true);
  const [reminders, setReminders] = useState([]);
  const [frequency, setFrequency] = useState('');

  const handleFrequencyChange = (event) => {
    setFrequency(event.target.value);
  };

  const addReminder = (medication, dosage, instructions, frequency, time) => {
    const newReminder = {
      medication,
      dosage,
      instructions,
      frequency,
      time,
      isTaken: false,
    };
    setReminders([...reminders, newReminder]);
  };

  const markAsTaken = (index) => {
    const updatedReminders = [...reminders];
    updatedReminders[index].isTaken = true;
    setReminders(updatedReminders);
  };

  const snoozeReminder = (index, snoozeDuration) => {
  };

  const deleteReminder = (index) => {
    const updatedReminders = [...reminders];
    updatedReminders.splice(index, 1);
    setReminders(updatedReminders);
  };
  const handleMedicineChange = (event) => {
    setMedicine(event.target.value);
  };

  const handleTimingChange = (event) => {
    setTiming(event.target.value);
  };

  const handleAddButton = () => {
    console.log("Medicine:", medicine);
    console.log("Timing:", timing);
  };

  const handleMedicineNameChange = (event) => {
    setMedicineName(event.target.value);
  };

  const handleDailyChange = (event) => {
    setDaily(event.target.checked);
  };

  const handleSubmit = () => {

    console.log("Medicine Name:", medicineName);
    console.log("Daily:", daily);
  };

  const handleMedicationTaken = (medicationName) => {
    console.log("Medication taken:", medicationName);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5" component="h1" gutterBottom>
        <span style={{ color: "#f12711" }}>Medicine</span> Reminder
      </Typography>
      <IconButton
        onClick={() => navigate("/dashboard")}
        style={{ position: "absolute", top: 0, left: 0, margin: "1rem" }}
      >
        <Home />
      </IconButton>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Card className={classes.card}>
            <CardHeader
              titleTypographyProps={{
                variant: "h5",
                component: "h3",
                className: classes.title,
              }}
              title="Worry less."
              subheader="Live healthier"
            />
            <Typography variant="body5" component="p">
              Welcome to Daily Dose
            </Typography>
            <CardContent>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlFPdDwdJI-RWULvVyRzPe6LyGLyXo-zfSjysea8VwdOpQKVHla8-x6Rjc5KKjjf8K2A&usqp=CAU"
                alt="Image 1"
                width={650}
              />
            </CardContent>
            <Badge badgeContent={3} color="secondary">
              <NotificationsIcon />
            </Badge>{" "}
            <Grid item xs={12} md={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Card className={classes.card}>
                    <Typography variant="body5" component="p">
                      Morning, Before breakfast
                    </Typography>
                    <CardContent>
                      <CardHeader
                        titleTypographyProps={{
                          variant: "h5",
                          component: "h2",
                          className: classes.title,
                        }}
                        title="Theraflue MaxGrip"
                      />
                      <CardContent>
                        <Typography variant="body1" component="p">
                          2 Pills
                        </Typography>
                        <HeartBroken />
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() =>
                            handleMedicationTaken("Theraflue MaxGrip")
                          }
                        >
                          Taken
                          <CheckRounded />
                        </Button>
                        <Notifications />
                      </CardContent>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Card className={classes.card}>
                    <Typography variant="body5" component="p">
                      Morning After Breakfast
                    </Typography>
                    <CardHeader
                      titleTypographyProps={{
                        variant: "h5",
                        component: "h2",
                        className: classes.title,
                      }}
                      title="Rutinoscorbin"
                    />
                    <CardContent>
                      <Typography variant="body1" component="p">
                        2 Pills
                      </Typography>
                      <HeartBroken />
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleMedicationTaken("Rutinoscorbin")}
                      >
                        Taken
                        <CheckRounded />
                      </Button>
                      <Notifications />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card className={classes.card}>
            <CardHeader
              titleTypographyProps={{
                variant: "h5",
                component: "h2",
              }}
              title="Schedule the Dose"
              className={classes.cardHeader}
            />
            <CardContent>
              <FormControl className={classes.formControl}>
                <InputLabel id="time-label">
                  What time in the day do you want to take it?
                </InputLabel>
                <Select
                  labelId="time-label"
                  id="time"
                  className={classes.select}
                  value={timing}
                  onChange={handleTimingChange}
                >
                  <MenuItem value="morning-after-breakfast">
                    Morning After Breakfast
                  </MenuItem>
                  <MenuItem value="before-lunch">Before Lunch</MenuItem>
                  <MenuItem value="after-lunch">After Lunch</MenuItem>
                  <MenuItem value="before-evening-snack">
                    Before Evening Snack
                  </MenuItem>
                  <MenuItem value="after-evening-snack">
                    After Evening Snack
                  </MenuItem>
                  <MenuItem value="before-dinner">Before Dinner</MenuItem>
                  <MenuItem value="after-dinner">After Dinner</MenuItem>
                </Select>
              </FormControl>

              <FormControl className={classes.formControl}>
                <InputLabel id="medicine-label">Select Medicine</InputLabel>
                <Select
                  labelId="medicine-label"
                  id="medicine"
                  value={medicine}
                  onChange={handleMedicineChange}
                  className={classes.select}
                >
                  <MenuItem value="medicine1">Medicine 1</MenuItem>
                  <MenuItem value="medicine2">Medicine 2</MenuItem>
                  <MenuItem value="medicine3">Medicine 3</MenuItem>
                  {/* Add more medicine options as needed */}
                </Select>
              </FormControl>

              <FormControl className={classes.formControl}>
                <InputLabel id="frequency-label">Frequency</InputLabel>
                <Select
                  labelId="frequency-label"
                  id="frequency"
                  value={daily ? "daily" : "non-daily"}
                  onChange={handleDailyChange}
                  className={classes.select}
                >
                  <MenuItem value="daily">Daily</MenuItem>
                  <MenuItem value="non-daily">Non-Daily</MenuItem>
                </Select>
              </FormControl>

              {daily ? (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AddIcon />}
                  onClick={handleAddButton}
                  className={classes.addButton}
                >
                  Add
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AddIcon />}
                  onClick={handleAddButton}
                  className={classes.addButton}
                  disabled={!medicineName}
                >
                  Add
                </Button>
              )}
            </CardContent>
            <Card className={classes.subCard}>
              <CardHeader
                titleTypographyProps={{
                  variant: "h5",
                  component: "h2",
                }}
                title="Add New Time Slot"
                className={classes.cardHeader}
              />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Medicine Name"
                      value={medicineName}
                      onChange={handleMedicineNameChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={daily}
                          onChange={handleDailyChange}
                          color="primary"
                        />
                      }
                      label="Daily"
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
  <Card className={classes.card}>
    <CardHeader
      titleTypographyProps={{
        variant: "h5",
        component: "h2",
      }}
      title="Add the Reminder"
      className={classes.cardHeader}
    />
    <CardContent>
      <form className={classes.reminderForm}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Medication Name" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Dosage" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Instructions" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="outlined" className={classes.select} fullWidth>
              <InputLabel>Frequency</InputLabel>
              <Select
                value={frequency}
                onChange={handleFrequencyChange}
                label="Frequency"
              >
                <MenuItem value="daily">Daily</MenuItem>
                <MenuItem value="weekly">Weekly</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField type="time" className={classes.timeInput} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              startIcon={<AddCircleOutline />}
              className={classes.addButton}
              fullWidth
            >
              Add Reminder
            </Button>
          </Grid>
        </Grid>
      </form>
      <ul className={classes.reminderList}>
        {reminders.map((reminder, index) => (
          <li key={index} className={classes.reminderItem}>
            <div>
              <Typography variant="h6">{reminder.medication}</Typography>
              <Typography>Dosage: {reminder.dosage}</Typography>
              <Typography>Instructions: {reminder.instructions}</Typography>
              <Typography>Frequency: {reminder.frequency}</Typography>
              <Typography>Time: {reminder.time}</Typography>
              <Button
                onClick={() => markAsTaken(index)}
                variant="outlined"
                startIcon={<CheckCircleOutline />}
                className={classes.reminderButton}
              >
                Mark as Taken
              </Button>
              <Button
                onClick={() => snoozeReminder(index, 10)}
                variant="outlined"
                startIcon={<Snooze />}
                className={classes.reminderButton}
              >
                Snooze
              </Button>
              <Button
                onClick={() => deleteReminder(index)}
                variant="outlined"
                startIcon={<Delete />}
                className={classes.reminderButton}
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
</Grid>

      </Grid>
    </div>
  );
};

export default MedicineReminder;