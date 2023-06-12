import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Grid,
  Typography,
  InputAdornment,
  Button,
  Snackbar,
} from "@material-ui/core";
import { Email, VpnKey, VpnKeyOutlined } from "@material-ui/icons";
import image1 from "../utils/Image2.jpg";
import React, { useState } from "react";
import NavBar from "./NavBar";
//import { useHistory} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
  },
  imageContainer: {
    flex: 1,
    backgroundImage: `url(${image1})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  imageOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  formWrapper: {
    width: "100%",
    maxWidth: "400px",
    margin: "auto",
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  createButton: {
    margin: theme.spacing(1, 1, 1),
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const SigninForm = () => {
  const classes = useStyles();
//   const history = useHistory();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  function loginpage(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
   
//     axios({
//       method: "POST",
//       url: ` ${process.env.REACT_APP_API_URL}/send-otp/login`,
//       data: {
//         email: email,
//       },
//     })
//       .then((response) => {
//         if (response.status === 200) {
//           setShowOTPField(true);
//           setStatus("success");
//           showOtpSentSnackbar();
//         } else {
//           setError("An error occurred. Please try again later.");
//         }
//       })
//       .catch((error) => {
//         console.log(error.response);
//         if (error.response && error.response.status === 401) {
//           setError("Invalid OTP");
//         } else {
//           setError("An error occurred. Please try again later.");
//         }
//       });
   }

 
  return (
    <>
    <NavBar />
    <div className={classes.container}>
      <div className={classes.imageContainer}></div>
      <div className={classes.formContainer}>
        <div className={classes.formWrapper}>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form className={classes.form} onSubmit={loginpage} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
             
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  name="password"
                  autoComplete="email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <VpnKeyOutlined />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={2}>
                    <Button
                      fullWidth
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                    >
                      Login
                    </Button>
                </Grid>  
            
              <Grid container>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <Grid item>{"Don't have an Profile?  "}</Grid>

                  <Grid item>
                    <Button
                      variant="outlined"
                      size="small"
                      color="primary"
                      onClick={() => {
                        window.location.replace("/SignUp");
                      }}
                    >
                      Create Profile
                    </Button>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </form>
          <Snackbar
            open={showSnackbar}
            message={snackbarMessage}
            autoHideDuration={6000}
            onClose={() => setShowSnackbar(false)}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            ContentProps={{
              style: {
                backgroundColor: "green",
                color: "white",
              },
            }}
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default SigninForm;
