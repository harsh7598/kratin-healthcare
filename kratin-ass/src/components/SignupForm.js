import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Grid } from "@material-ui/core";
import {
  AccountCircle as AccountCircleIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Home as HomeIcon,
  Event as EventIcon,
  Cake,
  Wc,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${require("../utils/Image2.jpg")})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 600,
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(5px)",
  },

  input: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  icon: {
    marginRight: "8px",
  },
  birthDateInput: {
    width: "calc(100% - 8px)",
  },
}));

const SignupForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.formContainer}>
      <form className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.input}
              label="First Name"
              variant="outlined"
              InputProps={{
                startAdornment: <AccountCircleIcon className={classes.icon} />,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.input}
              label="Last Name"
              variant="outlined"
              InputProps={{
                startAdornment: <AccountCircleIcon className={classes.icon} />,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.input}
              label="Date"
              variant="outlined"
              InputProps={{
                startAdornment: <EventIcon className={classes.icon} />,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.input}
              label="Email"
              variant="outlined"
              InputProps={{
                startAdornment: <EmailIcon className={classes.icon} />,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.input}
              label="Phone Number"
              variant="outlined"
              InputProps={{
                startAdornment: <PhoneIcon className={classes.icon} />,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.input}
              label="Address"
              variant="outlined"
              InputProps={{
                startAdornment: <HomeIcon className={classes.icon} />,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.input}
              label="City"
              variant="outlined"
              InputProps={{
                startAdornment: <HomeIcon className={classes.icon} />,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.input}
              label="State / Province"
              variant="outlined"
              InputProps={{
                startAdornment: <HomeIcon className={classes.icon} />,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.input}
              label="Postal / Zip Code"
              variant="outlined"
              InputProps={{
                startAdornment: <HomeIcon className={classes.icon} />,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Date of Birth"
              variant="outlined"
              type="date"
              InputProps={{
                startAdornment: <Cake className={classes.icon} />,
              }}
              className={classes.input}
            />
          </Grid>
    
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.input}
              label="Gender"
              variant="outlined"
              InputProps={{
                startAdornment: <Wc className={classes.icon} />,
              }}
            />
          </Grid>{" "}
        </Grid>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          size="large"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;
