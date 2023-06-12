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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NotificationsIcon from "@material-ui/icons/Notifications";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import AddIcon from "@material-ui/icons/Add";
import { HeartBroken, NotificationAdd } from "@mui/icons-material";
import {
  CheckRounded,
  Close,
  MoreVert,
  NotificationImportant,
  Notifications,
} from "@material-ui/icons";

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
  const [medicine, setMedicine] = useState("");
  const [timing, setTiming] = useState("");
  const [medicineName, setMedicineName] = useState("");
  const [daily, setDaily] = useState(true);

  const handleMedicineChange = (event) => {
    setMedicine(event.target.value);
  };

  const handleTimingChange = (event) => {
    setTiming(event.target.value);
  };

  const handleAddButton = () => {
    // Perform the desired action when the "Add" button is clicked
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
    // Handle the submission of the medicine slot
    // You can access the medicineName and daily values here
    console.log("Medicine Name:", medicineName);
    console.log("Daily:", daily);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5" component="h1" gutterBottom>
        <span style={{ color: "#f12711" }}>Medicine</span> Reminder
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
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
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDRTIPbORQDX2a4e1ZD-soBEeSih0dflZkw&usqp=CAU" alt="Image 1" width={250} />
            </CardContent>
            <NotificationsIcon />
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
                    <Button variant="contained" color="primary">
                      Taken<CheckRounded/>
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
                  <Button variant="contained" color="primary">
                  Taken<CheckRounded/>

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
          <Card>
            <CardHeader
              titleTypographyProps={{
                variant: "h5",
                component: "h2",
              }}
              title="Schedule the Dose"
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


              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={handleAddButton}
                className={classes.addButton}
              >
                Add
              </Button>
            </CardContent>
            <Card>
              <CardHeader
                titleTypographyProps={{
                  variant: "h5",
                  component: "h2",
                }}
                title="Add New Time Slot"
              />
              <CardContent>
                <Grid container spacing={2}>
                  {/* <Grid item>
      <WbSunnyIcon />
    </Grid> */}
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
      </Grid>
    </div>
  );
};

export default MedicineReminder;